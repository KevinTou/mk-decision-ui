# mk-decision-ui

Hosted website: http://mk-decision-challenge-ui.s3-website-us-west-1.amazonaws.com/contact

### Description

This was a challenge project for the **UI Engineer** role at **MK Decision**. The project was to create a contact form which utilized **Amazon Web Services (AWS)** after submitting the form.

### Thoughts and Process

This was my first time using **Material UI** and **AWS**. There were a handful of **AWS** services to learn about and figure out how they worked in relation to each other.

The first several hours were spent spinning up a React application and building the form using **Material UI**.

The majority of the time was spent trying to figure out how each service worked and how they connected to each other.

I ended up using the [AWS SDK docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html) to build the **Lambda function** which took the data coming from the client-side form and sent an e-mail using the **SES** service while also saving the messages to **DynamoDB**.

I also ran into a lot of issues trying to get the **API Gateway** to work properly. I ran into a CORS issue when trying to make a POST request from my clients. It took some time to understand the process of creating the resource, staging it, then deploying it after each change.

The **overall workflow** that I followed was:

1. Create the client form using **Material UI** and **React**
2. Host the application from the **S3** bucket
3. Set up the **Lambda** function using the **SES** and get an e-mail sent
4. Set up the **DynamoDB** and get messages stored within the same **Lambda** function
5. Set up the **API Gateway** using the above **Lambda** function
6. Then connected the `onSubmit` handler from the client with the endpoint from the **API Gateway**

### To Do

- Add a login page using **AWS Cognito User Pools and Federated Identities**
- Enable **SSL(TLS 1.2)**
- Incorporate a third-party OAuth (e.g. Facebook or Google)
- Add testing
- Possibly utilize **AWS Amplify** for similar functionalities

### Installation

1. Clone or fork the repository

2. Install the dependencies using: `npm install`

3. Start the application using: `npm start`

**\- Notes -**

- The **SES** service is currently in Sandbox mode and will only send e-mails to the e-mails verified.
- The data submitted will still be entered into **DynamoDB**.

### Third-Party Libraries/Services Used

- [React](https://reactjs.org/) - A "JavaScript library for building user interfaces"
- [React Router](https://reactrouter.com/) - A "a collection of navigational components that compose declaratively with your application"
- [Axios](https://github.com/axios/axios) - A "promise based HTTP client for the browser and node.js"
- [Material-UI](https://material-ui.com/) - A React component library "for faster and easier web development"
- [Amazon Web Services (AWS)](https://aws.amazon.com/) - A "cloud platform, offering over 175 fully featured services from data centers globally"
  - [Simple Storage Service (S3)](https://aws.amazon.com/s3/) - An "object storage built to store and retrieve any amount of data from anywhere"
  - [API Gateway](https://aws.amazon.com/api-gateway/) - A "fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale"
  - [Lambda](https://aws.amazon.com/lambda/) - A service which allows you to "run code without provisioning or managing servers"
  - [Simple Email Service (SES)](https://aws.amazon.com/ses/) - A "cost-effective, flexible, and scalable email service that enables developers to send mail from within any application"
  - [DynamoDB](https://aws.amazon.com/dynamodb/) - A "key-value and document database that delivers single-digit millisecond performance at any scale"
