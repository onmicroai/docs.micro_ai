---
title: LTI Connection (Open edX®)
description: Connect an app to an LMS via LTI
---

# **LTI Connection**

This guide adds an AI Microapp into an Open edX course via LTI so we can authenticate the user and pass a grade back to the LMS. **More LMS options coming soon**

Note: The grade is pass/fail based on whether or not the user successfully reached the end of the exercise. 

**\# IN [ONMICRO.AI](http://ONMICRO.AI)**

1. **Navigate to your dashboard ([https://onmicro.ai/dashboard](https://onmicro.ai/dashboard))**  
2. **Confirm your app is marked ‘public’**  
   ![](/src/assets/images/image1.png)
3. **From the kebab menu for your app, click on ‘Share’**  
   ![](/src/assets/images/image11.png)
4. **Go to the LTI tab**  
   ![](/src/assets/images/image13.png)
5. **Keep this tab up. You will use it in the next steps on Open edX**

**\#\# ON OPEN EDX**

1. **Go to your Open edX® Studio**

2. In the course where you will be placing the app, add "lti_consumer" to the list of advanced apps. 

3. **In your course, add an LTI Consumer component**
   ![](/src/assets/images/image5.png)
5. **Edit the LTI Consumer Component**  
   ![](/src/assets/images/image12.png)

   Configure the following fields. Any unmentioned fields can keep the default values. 

| Field | Value |
| :---- | :---- |
| Display Name | [Your name for the app to display in the LMS] |
| LTI Version | LTI 1.3 |
| Tool Launch URL | \[Get this from [onmicro.ai](http://onmicro.ai) Tool Launch URL\] |
| Tool Initiate Login URL | \[Get this from [onmicro.ai](http://onmicro.ai) Tool Initiate URL\] |
| Tool Public Key Mode | Keyset URL |
| Tool Keyset URL | \[Get this from [onmicro.ai](http://onmicro.ai) JWKs URL\] |
| Deep Linking | False |
| LTI Launch Target | New Window |
| Scored | True |

6. **Save the component. If successful, the LMS should generate some values for you to pass back to the LTI Provider (onmicro)**

**\# IN [ONMICRO.AI](http://ONMICRO.AI)**

1. **From your LTI settings for your app, paste the following values that were generated from Open edX**

   ![](/src/assets/images/image6.png)

| Field | Value |
| :---- | :---- |
| Issuer | [The URL for your LMS e.g. https://sumac.curricu.me] |
| Client ID | \[Get this from Open edX LTI Consumer Client ID\] |
| Auth Login URL | \[Get this from Open edX LTI Consumer Login URL\] |
| Auth Token URL | \[Get this from Open edX LTI Consumer Access Token URL\] |
| Keyset URL | \[Get this from Open edX LTI Consumer Keyset URL\] |
| Deployment ID | \[Get this from Open edX LTI Deployment ID\] |

2. **Save your configuration**  
   ![](/src/assets/images/image7.png)
     
   

**\#\# ON OPEN EDX**

1. **Confirm your unit is published**  
   ![](/src/assets/images/image10.png)
2. **‘View Live’ to view your unit, and launch your exercise**  
   ![](/src/assets/images/image4.png)
3. **Complete the exercise in the new window. Try to reach the end of the exercise and pass.**   
   ![](/src/assets/images/image9.png)
4. **Navigate back to Open edX and check your gradebook. You should have a score of 100 (Note: You’ll likely need to ‘Edit Filters’ and ‘Include Course Team Members’ to see your score)**  