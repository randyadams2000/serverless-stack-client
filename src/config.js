
const dev = {
  STRIPE_KEY: "pk_test_ndIg8f5VunFrlrm5iKvZGdyV00uxJoMP01",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "immortify-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://7pntfrx56l.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_oihSpfWay",
    APP_CLIENT_ID: "5galeo3i1a9i6gufempcq7fjvt",
    IDENTITY_POOL_ID: "us-east-1:58369085-ac6e-44af-9b1e-bc749d769f09"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_ndIg8f5VunFrlrm5iKvZGdyV00uxJoMP01",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "immortify-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://7pntfrx56l.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_oihSpfWay",
    APP_CLIENT_ID: "5galeo3i1a9i6gufempcq7fjvt",
    IDENTITY_POOL_ID: "us-east-1:58369085-ac6e-44af-9b1e-bc749d769f09"
  }
};


// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};