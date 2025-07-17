---
title: Deployment Guide
description: A guide in my new Starlight docs site.
---

## **Pre-Requisites**

1. An Amazon Web Services account. Right now, instructions are only built for hosting on Amazon Web Services.   

2. An AWS EC2 Server with the following specifications or similar: 
   1. T3.large (2 vCPU; 8GB Memory)  
   2. Ubuntu 24.04  
   3. 100 GB Storage  
   4. Open Ports  
      1. 80  
      2. 443  
      3. 22 (restricted to machines with SSH access)  
 


## **Main Install**

1. SSH on your machine and perform an update

```
sudo apt-get update
```

2. Set up Docker’s apt repository (source: [Docker Docs](https://docs.docker.com/engine/install/ubuntu/))

```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

4. Install the latest Docker packages (source: [Docker Docs](https://docs.docker.com/engine/install/ubuntu/))

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

5. Add your user to the docker group so that it can run docker commands without sudo

```
sudo usermod -aG docker ${USER}
(Exit and SSH into your machine again so this change takes effect)
```

6. Verify that the installation is successful by running the hello-world image (source: [Docker Docs](https://docs.docker.com/engine/install/ubuntu/))

```
sudo docker run hello-world
```

7. Clone the OnMicro repo

```
git clone https://github.com/onmicroai/micro_ai.git
```

8. Prepare your env file by collecting ALL of the following environment variables. 
   1. Set these variables on your own  

| Variable Name | Description | Sample Value |
| :---- | :---- | :---- |
| PRODUCTION | Set to True for a hosted environment. False for a local environment. | True |
| DEBUG | Set to True for a local development environment. Otherwise, False | False |
| DOMAIN | Your full site name | https://my-site.ai |
| COOKIES\_DOMAIN | Your site name without prefix | my-site.ai |
| CORS\_ALLOWED\_ORIGINS |  | [http://localhost:3000,http://localhost:8000,http://localhost](http://localhost:3000,http://localhost:8000,http://localhost), https://my-site.ai |
| CSRF\_TRUSTED\_ORIGINS |  | [http://localhost:3000,http://localhost:8000,http://localhost](http://localhost:3000,http://localhost:8000,http://localhost), https://my-site.ai |

   2. Generate secure credentials for your database. The Docker process will create a database with these credentials the first time you run it.    

| Variable Name | Description | Sample Value |
| :---- | :---- | :---- |
| DATABASE\_NAME | The name of your database. The first time you run the install, the docker process will spin up a database with this name. | my\_db |
| DATABASE\_USER | The master user for your database. The first time you run the install, the docker process will spin up a database with access for this username. **Use a secure username, not the default.** | insecure\_user |
| DATABASE\_PASSWORD | The password for your database’s master user. The first time you run the install, the docker process will spin up a database with this password. **Use a secure password, not the default.** | insecure\_password\_123 |
| DATABASE\_URL | The full database URL in this format: postgresql://\[DATABASE\_USER\]:\[DATABASE\_PASSWORD\]@db:5432/\[DATABASE\_NAME\] We do use the separate DB Name, User, and Password for some docker health checks, whereas Django uses the full DATABASE\_URL. Future task to eliminate this redundancy | postgresql://insecure\_user:insecure\_password\_123@db:5432/my\_db |

   3. Set AWS SES (Email) credentials based on the [Obtain AWS SES Email Credentials](#obtain-aws-ses-email-credentials) steps  

| Variable Name | Description | Sample Value |
| :---- | :---- | :---- |
| EMAIL\_HOST | The SMTP Host address provided by AWS SES | email-smtp.us-east-1.amazonaws.com |
| EMAIL\_PORT | The Port provided by AWS SES. Usually 587 | 587 |
| EMAIL\_USE\_TLS | This should be True | True |
| EMAIL\_HOST\_USER | The IAM User ID with access to send emails via SES | \[A long string\] |
| EMAIL\_HOST\_PASSWORD | The IAM Password for your User | \[A long string\] |
| DEFAULT\_FROM\_EMAIL | The email address that site emails should be sent from. Ensure they are an approved email or domain in SES. | no-reply@my-site.ai |

   4. Set the AI API keys for services you plan to use. (Instructions are not provided on how to obtain these credentials. Refer to their websites)  

| Variable Name | Description | Sample Value |
| :---- | :---- | :---- |
| OPENAI\_API\_KEY | Your OpenAI API key |  |
| OPENAI\_TTS\_API\_KEY | An OpenAI API key used specifically for Text-to-Speech, since TTS costs are more variable it is helpful to track with a separate key. Can be the same value as OPENAI\_API\_KEY |  |
| GOOGLE\_API\_KEY | A Google Gemini API key |  |
| ANTHROPIC\_API\_KEY | An Anthropic Claude API key |  |
| PERPLEXITY\_API\_KEY | A Perplexity API key |  |
| DEEPSEEK\_API\_KEY | A DeepSeek API key |  |
| DEFAULT\_AI\_MODEL | The default AI Model to use when no model is specified |  |


   5. Set AWS S3 credentials (for image and file uploads) based on the [Obtain S3 Storage Credentials](#obtain-s3-storage-credentials) steps.  

| Variable Name | Description | Sample Value |
| :---- | :---- | :---- |
| AWS_ACCESS_KEY_ID | The access ID for the AWS IAM user who has access to your bucket | AKIAJXMKFUYBDZ3LM7J |
| AWS\_SECRET\_ACCESS\_KEY | The secret key for the AWS IAM user who has access to your bucket | [long password] |
| AWS\_STORAGE\_BUCKET\_NAME | The name you gave your storage bucket | mysite-uploads |
| AWS\_S3\_REGION\_NAME | The aws region of your bucket. You can find this in your bucket URL or the bucket properties in AWS console | us-east-1 |
| AWS\_ACCOUNT\_ID | Your AWS account ID (no spaces) | 533212345678 |


   6. Set Cloudfront Distribution (for serving images and files) based on the [Obtain Cloud Distribution Credentials](#obtain-cloud-distribution-credentials) steps  

| Variable Name | Description | Sample Value |
| :---- | :---- | :---- |
| CLOUDFRONT\_DOMAIN | The URL without a prefix for the cloudfront distribution that will serve assets | d2h8gk38j5ve7k.cloudfront.net |



9. Bring up the Docker network that connects the services

```
docker network create --subnet=172.25.0.0/16 micronet
```

10. Make a copy of the appropriate nginx configuration file for your environment

```
cd /home/ubuntu/micro_ai/nginx
cp -rf nginx.prod.conf nginx.conf
```

11. Edit **nginx.conf** and change any references to old domain names ([staging.onmicro.ai](http://staging.onmicro.ai); [onmicro.ai](http://onmicro.ai)) to your domain name(s)  

12. Build and bring up your containers in production mode

```
cd /home/ubuntu/micro_ai
docker compose -f docker-compose.prod.yml up --build
```

13. At this point, you should have five running, healthy containers:

![][image1]

14. The first time you run the nginx container, you must get letsencrypt certificates. Follow these steps.   
    1. Make a backup of nginx.conf (e.g. nginx.conf.bck)  
    2. In nginx.conf, remove both 443 blocks, leaving just the 80 block. Your conf file will look something like this:

```

server {
    listen 80;
    server_name [site-name] [site-name];


    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

#Everything below here has been deleted

```

15. Build and run the nginx container

```
docker compose -f docker-compose-nginx.yaml up --build -d
```

16. When the nginx container is up and running, run the command in test (staging) mode to request certificates. 

```
docker run --rm \
-v "/home/ubuntu/micro_ai/nginx/certbot/conf:/etc/letsencrypt" \
-v "/home/ubuntu/micro_ai/nginx/certbot/www:/var/www/certbot" \
certbot/certbot certonly \
--webroot -w /var/www/certbot \
--email [your email] \
-d [site name] -d [additional site names, if applicable] \
--agree-tos --no-eff-email \
--staging
```

17. If the test is successful, remove the \--staging flag and replace it with \--force-renewal to run the command live

```
docker run --rm \
-v "/home/ubuntu/micro_ai/nginx/certbot/conf:/etc/letsencrypt" \
-v "/home/ubuntu/micro_ai/nginx/certbot/www:/var/www/certbot" \
certbot/certbot certonly \
--webroot -w /var/www/certbot \
--email [your email] \
-d [site name] -d [additional site names, if applicable] \
--agree-tos --no-eff-email \
--force-renewal
```

18. You should now see a series of certificates at /home/ubuntu/micro\_ai/nginx/certbot/conf/live/\[site-name\]. Take note of that site-name.   
19. Overwrite your temporary nginx.conf with your nginx.conf.bck (the one with 443 blocks).  
20. Review your nginx.conf file to confirm that your 443 blocks reference the directory with the correct site-name. For example, if your directory is called /home/ubuntu/micro\_ai/nginx/certbot/conf/live/[my-site.ai](http://my-site.ai) then your certificate lines should look like this: 

```
    ssl_certificate /etc/letsencrypt/live/my-site.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/my-site.ai/privkey.pem;

```

## Obtain AWS SES Email Credentials

AWS SES is the service used to send emails. You will need to set up a host and credentials to send emails from the application via SES. 

To get AWS SES credentials for your application, you'll need to verify your domain, create an SMTP user, and note the correct regional endpoint.

---

### **1\. Verify Your Domain in SES**

First, you must prove you own the domain you want to send emails from.

1. Navigate to the **Amazon SES** service in your AWS Console.  
2. In the left menu under **Configuration**, click **Identities**.  
3. Click **Create identity**, choose **Domain**, and enter your domain name (e.g., [`example.com`](http://example.com)).  
   1. Alternatively, you may choose **Email Address**. This is a quicker, simpler verification process but you only get to send from one email address with less deliverability reliability.   
4. Follow the instructions to add the provided CNAME records to your domain's DNS settings. It may take some time for AWS to detect these changes and mark the domain as "Verified."

---

### **2\. Create SMTP Credentials**

Next, create the specific user credentials for sending email via the SMTP protocol.

1. In the SES menu, go to **SMTP Settings**  
2. From the settings page cllick **Create SMTP credentials**.  
3. Follow the wizard for creating new IAM user credentials. An IAM user will be created for you. Click **Show user SMTP security credentials** to view the **SMTP Username** (`EMAIL_HOST_USER`) and **SMTP Password** (`EMAIL_HOST_PASSWORD`).  
4. **Important:** Copy and save the password immediately. This is the only time it will be displayed.

---

### **3\. Identify Your Host and Port**

Finally, gather the endpoint information for your chosen AWS region.

1. In the SES menu click **SMTP settings**.  
2. Note the **Endpoint name** for your region. This is your `EMAIL_HOST`. For example, `email-smtp.us-east-1.amazonaws.com`.  
3. The **Port** for TLS connections is **587**.

---

### **4\. Choose your From Email**

1. Your **DEFAULT\_FROM\_EMAIL** value can be any email address you want within a verified domain.  
   1. If you only verified a single Email Address in your AWS SES Identities, then you *must* use that address.

### **Summary of Credentials**

* **`EMAIL_HOST`**: The **Endpoint name** from the SMTP settings page (e.g., `email-smtp.us-east-1.amazonaws.com`).  
* **`EMAIL_PORT`**: `587`  
* **`EMAIL_HOST_USER`**: The **SMTP Username** you created.  
* **`EMAIL_HOST_PASSWORD`**: The **SMTP Password** you created.  
* **`DEFAULT_FROM_EMAIL`**: An **Email address** from an approved domain in your AWS SES Identities. 


## **Obtain S3 Storage Credentials**

1. In AWS, create a bucket that will store your static files.   
   1. Give it a name  
      1. E.g. “onmicro-dev”  
   2. Modify the CORS policy to allow any URLs you expect to use: 

```javascript
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "POST",
            "PUT",
            "DELETE",
            "HEAD"
        ],
        "AllowedOrigins": [
            "http://localhost",
            "http://localhost:3000",
            "https://onmicro.ai",
            "https://dev.onmicro.ai"
        ],
        "ExposeHeaders": [
            "ETag"
        ],
        "MaxAgeSeconds": 3000
    }
]

```

2. In AWS, create an IAM user that has access to your bucket.   
   1. This the policy that I use:

```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::[bucket-name]",
                "arn:aws:s3:::[bucket-name]/*"
            ]
        }
    ]
}

```

3. Capture your IAM user’s AWS Access Key and Secret Access Key for use later  

4. Summary of Credentials

* **`AWS_ACCESS_KEY_ID`**: The access key ID from your IAM user credentials.  
* **`AWS_SECRET_ACCESS_KEY`**: The secret access key from your IAM user credentials.  
* **`AWS_STORAGE_BUCKET_NAME`**: The name of your S3 bucket.  
* **`AWS_S3_REGION_NAME`**: The AWS region where your S3 bucket is located (e.g., `us-east-1`).  
* **`AWS_ACCOUNT_ID`**: Your 12-digit AWS account ID.


## **Obtain Cloud Distribution Credentials**

1. Create a CloudFront Distribution  
   1. In the AWS Console, navigate to CloudFront and create a new distribution.  
   2. Under Origin, set:  
      1. Origin Type: S3 bucket  
      2. Origin Domain: Select your S3 bucket  
      3. Origin Access: Choose Origin Access Control Settings (OAC) and create a new OAC.  
      4. Bucket Policy: Allow CloudFront to access your bucket by updating its permissions when prompted.  
   3. Under Default Cache Behavior, set:  
      1. Viewer Protocol Policy: Redirect HTTP to HTTPS.  
      2. Allowed HTTP Methods: GET, HEAD (for static asset retrieval).  
      3. Cache Policy: Use an appropriate caching policy (e.g., CachingOptimized).  
      4. Click Create Distribution and wait for deployment.  
2. Update Your S3 Bucket Policy  
   1. If you do it correctly, you’ll be **given** the correct policy code when you create the Cloudfront distribution. But it looks like this:

```javascript
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowCloudFrontServicePrincipalReadOnly",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::[bucket-name]/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "arn:aws:cloudfront::[AWS_ACCOUNT_ID]:distribution/[CLOUDFRONT_DISTRIBUTION_ID]"
                }
            }
        }
    ]
}
```

   2. Replace \[bucket-name\], \[AWS\_ACCOUNT\_ID\], and \[CLOUDFRONT\_DISTRIBUTION\_ID\] with your actual values.  
3. Once deployed, retrieve and save your Distribution domain name ([e.g.a1b2cd34e5fg6h.cloudfront.net](http://e.g.a1b2cd34e5fg6h.cloudfront.net))  

4. Summary of Credentials

* **`CLOUDFRONT_DOMAIN`**: The URL without a prefix for the cloudfront distribution that will serve assets

