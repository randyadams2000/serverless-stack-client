
export default {
  STRIPE_KEY: "pk_test_ndIg8f5VunFrlrm5iKvZGdyV00uxJoMP01",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "immortify-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://49lipoe04b.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_vwBP95FkR",
    APP_CLIENT_ID: "248m7ijfe0qs0vv81kap2gb2ls",
    IDENTITY_POOL_ID: "us-east-1:360bb111-2a86-4362-a4fb-e5edefef536a"
  }
};

