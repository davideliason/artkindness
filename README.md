# Art Kindness
## August 2025
### full-stack app of a local shelter to manage their donation inventory.

This will be a full-stack app that uses cloud infrastructure to utilize data pipelines and services to work with data in a meaningful way, helping to bring art to a difficult world.

This is also a learning opportunity, and the beginning stages will include the construction of the engine and functionality to manage local inventory for a local shelter. The initial version will provide an input form with name, type of donation, quantity of donation, and date. This inputted data will be persisted and will allow dynamic interaction via reviewing or updating data. The lessons learned from that exercise will help later versions of the app 

## Actions for Building Cloud Infrastructure
1. Obtained a domain name (artkindness.com) via Route 53
2. Created s3 buckets: artkindness.com and www.artkindness.com
3. Enbabled static website hosting within s3 but making the bucket policy to allow public access
4. Pointed the domain to the s3 bucket via an A Record within Route 53 Hozed Zone
4.5) Created a redirect using subdomain www.artkndness.com to artkindess.com using A Record
5. Goal is to create serverless architecture: S3 (form and inputs) > API-Gateway > Lambda function > DynamoDB
5a) Create Data Model for DynamoDB using form inputs: donationType, quantityAmount, donationDate
