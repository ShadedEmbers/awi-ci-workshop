## Serverless workshop | lambda

A workshop to cover the basics of serverless and lambdas.

---

### Before you start:

Install serverless globally, you can also use `npx` if you do not want to install serverless

```
$ npm i -g serverless
```

**Set up your AWS credentials:**
- Log into the [AWS console](https://eu-west-1.console.aws.amazon.com/)
- Go to IAM
- Create a new user
  - add user
  - set a username (e.g: serverless)
  - select access key type
- Set new user permissions to `AdministratorAccess` from existing policies 
- Keep pressing next, then "Create User"
- Take note of your `Access Key ID` and `Secret access key`

**Configure your AWS profile on your machine**

Using the AWS CLI run 
```
$ aws configure
AWS Access Key ID [None]: YOUR_KEY
AWS Secret Access Key [None]: YOUR_SECRET
Default region name [None]: eu-west-1
Default output format [None]: ENTER
```

You should now have a file under `~/.aws/credentials` with you credentials configured. 
