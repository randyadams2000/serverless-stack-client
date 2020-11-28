
// AWS SDK for JavaScript v2.1.12
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt
!function e(t,r,n){function i(a,s){if(!r[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=r[a]={exports:{}};t[a][0].call(c.exports,function(e){var r=t[a][1][e];return i(r?r:e)},c,c.exports,e,t,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,t){var r=e("./core");r.apiLoader=function(e,t){return r.apiLoader.services[e][t]},r.apiLoader.services={},r.XML.Parser=e("./xml/browser_parser"),e("./http/xhr"),"undefined"!=typeof window&&(window.AWS=r),"undefined"!=typeof t&&(t.exports=r),r.apiLoader.services.cloudwatch={},r.CloudWatch=r.Service.defineService("cloudwatch",["2010-08-01"]),r.apiLoader.services.cloudwatch["2010-08-01"]={metadata:{apiVersion:"2010-08-01",endpointPrefix:"monitoring",serviceAbbreviation:"CloudWatch",serviceFullName:"Amazon CloudWatch",signatureVersion:"v4",xmlNamespace:"http://monitoring.amazonaws.com/doc/2010-08-01/",protocol:"query"},operations:{DeleteAlarms:{input:{type:"structure",required:["AlarmNames"],members:{AlarmNames:{shape:"S2"}}},http:{}},DescribeAlarmHistory:{input:{type:"structure",members:{AlarmName:{},HistoryItemType:{},StartDate:{type:"timestamp"},EndDate:{type:"timestamp"},MaxRecords:{type:"integer"},NextToken:{}}},output:{resultWrapper:"DescribeAlarmHistoryResult",type:"structure",members:{AlarmHistoryItems:{type:"list",member:{type:"structure",members:{AlarmName:{},Timestamp:{type:"timestamp"},HistoryItemType:{},HistorySummary:{},HistoryData:{}}}},NextToken:{}}},http:{}},DescribeAlarms:{input:{type:"structure",members:{AlarmNames:{shape:"S2"},AlarmNamePrefix:{},StateValue:{},ActionPrefix:{},MaxRecords:{type:"integer"},NextToken:{}}},output:{resultWrapper:"DescribeAlarmsResult",type:"structure",members:{MetricAlarms:{shape:"Sj"},NextToken:{}}},http:{}},DescribeAlarmsForMetric:{input:{type:"structure",required:["MetricName","Namespace"],members:{MetricName:{},Namespace:{},Statistic:{},Dimensions:{shape:"Sv"},Period:{type:"integer"},Unit:{}}},output:{resultWrapper:"DescribeAlarmsForMetricResult",type:"structure",members:{MetricAlarms:{shape:"Sj"}}},http:{}},DisableAlarmActions:{input:{type:"structure",required:["AlarmNames"],members:{AlarmNames:{shape:"S2"}}},http:{}},EnableAlarmActions:{input:{type:"structure",required:["AlarmNames"],members:{AlarmNames:{shape:"S2"}}},http:{}},GetMetricStatistics:{input:{type:"structure",required:["Namespace","MetricName","StartTime","EndTime","Period","Statistics"],members:{Namespace:{},MetricName:{},Dimensions:{shape:"Sv"},StartTime:{type:"timestamp"},EndTime:{type:"timestamp"},Period:{type:"integer"},Statistics:{type:"list",member:{}},Unit:{}}},output:{resultWrapper:"GetMetricStatisticsResult",type:"structure",members:{Label:{},Datapoints:{type:"list",member:{type:"structure",members:{Timestamp:{type:"timestamp"},SampleCount:{type:"double"},Average:{type:"double"},Sum:{type:"double"},Minimum:{type:"double"},Maximum:{type:"double"},Unit:{}},xmlOrder:["Timestamp","SampleCount","Average","Sum","Minimum","Maximum","Unit"]}}}},http:{}},ListMetrics:{input:{type:"structure",members:{Namespace:{},MetricName:{},Dimensions:{type:"list",member:{type:"structure",required:["Name"],members:{Name:{},Value:{}}}},NextToken:{}}},output:{xmlOrder:["Metrics","NextToken"],resultWrapper:"ListMetricsResult",type:"structure",members:{Metrics:{type:"list",member:{type:"structure",members:{Namespace:{},MetricName:{},Dimensions:{shape:"Sv"}},xmlOrder:["Namespace","MetricName","Dimensions"]}},NextToken:{}}},http:{}},PutMetricAlarm:{input:{type:"structure",required:["AlarmName","MetricName","Namespace","Statistic","Period","EvaluationPeriods","Threshold","ComparisonOperator"],members:{AlarmName:{},AlarmDescription:{},ActionsEnabled:{type:"boolean"},OKActions:{shape:"So"},AlarmActions:{shape:"So"},InsufficientDataActions:{shape:"So"},MetricName:{},Namespace:{},Statistic:{},Dimensions:{shape:"Sv"},Period:{type:"integer"},Unit:{},EvaluationPeriods:{type:"integer"},Threshold:{type:"double"},ComparisonOperator:{}}},http:{}},PutMetricData:{input:{type:"structure",required:["Namespace","MetricData"],members:{Namespace:{},MetricData:{type:"list",member:{type:"structure",required:["MetricName"],members:{MetricName:{},Dimensions:{shape:"Sv"},Timestamp:{type:"timestamp"},Value:{type:"double"},StatisticValues:{type:"structure",required:["SampleCount","Sum","Minimum","Maximum"],members:{SampleCount:{type:"double"},Sum:{type:"double"},Minimum:{type:"double"},Maximum:{type:"double"}}},Unit:{}}}}}},http:{}},SetAlarmState:{input:{type:"structure",required:["AlarmName","StateValue","StateReason"],members:{AlarmName:{},StateValue:{},StateReason:{},StateReasonData:{}}},http:{}}},shapes:{S2:{type:"list",member:{}},Sj:{type:"list",member:{type:"structure",members:{AlarmName:{},AlarmArn:{},AlarmDescription:{},AlarmConfigurationUpdatedTimestamp:{type:"timestamp"},ActionsEnabled:{type:"boolean"},OKActions:{shape:"So"},AlarmActions:{shape:"So"},InsufficientDataActions:{shape:"So"},StateValue:{},StateReason:{},StateReasonData:{},StateUpdatedTimestamp:{type:"timestamp"},MetricName:{},Namespace:{},Statistic:{},Dimensions:{shape:"Sv"},Period:{type:"integer"},Unit:{},EvaluationPeriods:{type:"integer"},Threshold:{type:"double"},ComparisonOperator:{}},xmlOrder:["AlarmName","AlarmArn","AlarmDescription","AlarmConfigurationUpdatedTimestamp","ActionsEnabled","OKActions","AlarmActions","InsufficientDataActions","StateValue","StateReason","StateReasonData","StateUpdatedTimestamp","MetricName","Namespace","Statistic","Dimensions","Period","Unit","EvaluationPeriods","Threshold","ComparisonOperator"]}},So:{type:"list",member:{}},Sv:{type:"list",member:{type:"structure",required:["Name","Value"],members:{Name:{},Value:{}},xmlOrder:["Name","Value"]}}},paginators:{DescribeAlarmHistory:{input_token:"NextToken",output_token:"NextToken",limit_key:"MaxRecords",result_key:"AlarmHistoryItems"},DescribeAlarms:{input_token:"NextToken",output_token:"NextToken",limit_key:"MaxRecords",result_key:"MetricAlarms"},DescribeAlarmsForMetric:{result_key:"MetricAlarms"},ListMetrics:{input_token:"NextToken",output_token:"NextToken",result_key:"Metrics"}}},r.apiLoader.services.cognitoidentity={},r.CognitoIdentity=r.Service.defineService("cognitoidentity",["2014-06-30"]),e("./services/cognitoidentity"),r.apiLoader.services.cognitoidentity["2014-06-30"]={metadata:{apiVersion:"2014-06-30",endpointPrefix:"cognito-identity",jsonVersion:"1.1",serviceFullName:"Amazon Cognito Identity",signatureVersion:"v4",targetPrefix:"AWSCognitoIdentityService",protocol:"json"},operations:{CreateIdentityPool:{input:{type:"structure",required:["IdentityPoolName","AllowUnauthenticatedIdentities"],members:{IdentityPoolName:{},AllowUnauthenticatedIdentities:{type:"boolean"},SupportedLoginProviders:{shape:"S4"},DeveloperProviderName:{},OpenIdConnectProviderARNs:{shape:"S8"}}},output:{shape:"Sa"},http:{}},DeleteIdentityPool:{input:{type:"structure",required:["IdentityPoolId"],members:{IdentityPoolId:{}}},http:{}},DescribeIdentity:{input:{type:"structure",required:["IdentityId"],members:{IdentityId:{}}},output:{shape:"Sf"},http:{}},DescribeIdentityPool:{input:{type:"structure",required:["IdentityPoolId"],members:{IdentityPoolId:{}}},output:{shape:"Sa"},http:{}},GetCredentialsForIdentity:{input:{type:"structure",required:["IdentityId"],members:{IdentityId:{},Logins:{shape:"Sk"}}},output:{type:"structure",members:{IdentityId:{},Credentials:{type:"structure",members:{AccessKeyId:{},SecretKey:{},SessionToken:{},Expiration:{type:"timestamp"}}}}},http:{}},GetId:{input:{type:"structure",required:["IdentityPoolId"],members:{AccountId:{},IdentityPoolId:{},Logins:{shape:"Sk"}}},output:{type:"structure",members:{IdentityId:{}}},http:{}},GetIdentityPoolRoles:{input:{type:"structure",members:{IdentityPoolId:{}}},output:{type:"structure",members:{IdentityPoolId:{},Roles:{shape:"Sw"}}},http:{}},GetOpenIdToken:{input:{type:"structure",required:["IdentityId"],members:{IdentityId:{},Logins:{shape:"Sk"}}},output:{type:"structure",members:{IdentityId:{},Token:{}}},http:{}},GetOpenIdTokenForDeveloperIdentity:{input:{type:"structure",required:["IdentityPoolId","Logins"],members:{IdentityPoolId:{},IdentityId:{},Logins:{shape:"Sk"},TokenDuration:{type:"long"}}},output:{type:"structure",members:{IdentityId:{},Token:{}}},http:{}},ListIdentities:{input:{type:"structure",required:["IdentityPoolId","MaxResults"],members:{IdentityPoolId:{},MaxResults:{type:"integer"},NextToken:{}}},output:{type:"structure",members:{IdentityPoolId:{},Identities:{type:"list",member:{shape:"Sf"}},NextToken:{}}},http:{}},ListIdentityPools:{input:{type:"structure",required:["MaxResults"],members:{MaxResults:{type:"integer"},NextToken:{}}},output:{type:"structure",members:{IdentityPools:{type:"list",member:{type:"structure",members:{IdentityPoolId:{},IdentityPoolName:{}}}},NextToken:{}}},http:{}},LookupDeveloperIdentity:{input:{type:"structure",required:["IdentityPoolId"],members:{IdentityPoolId:{},IdentityId:{},DeveloperUserIdentifier:{},MaxResults:{type:"integer"},NextToken:{}}},output:{type:"structure",members:{IdentityId:{},DeveloperUserIdentifierList:{type:"list",member:{}},NextToken:{}}},http:{}},MergeDeveloperIdentities:{input:{type:"structure",required:["SourceUserIdentifier","DestinationUserIdentifier","DeveloperProviderName","IdentityPoolId"],members:{SourceUserIdentifier:{},DestinationUserIdentifier:{},DeveloperProviderName:{},IdentityPoolId:{}}},output:{type:"structure",members:{IdentityId:{}}},http:{}},SetIdentityPoolRoles:{input:{type:"structure",required:["IdentityPoolId","Roles"],members:{IdentityPoolId:{},Roles:{shape:"Sw"}}},http:{}},UnlinkDeveloperIdentity:{input:{type:"structure",required:["IdentityId","IdentityPoolId","DeveloperProviderName","DeveloperUserIdentifier"],members:{IdentityId:{},IdentityPoolId:{},DeveloperProviderName:{},DeveloperUserIdentifier:{}}},http:{}},UnlinkIdentity:{input:{type:"structure",required:["IdentityId","Logins","LoginsToRemove"],members:{IdentityId:{},Logins:{shape:"Sk"},LoginsToRemove:{shape:"Sg"}}},http:{}},UpdateIdentityPool:{input:{shape:"Sa"},output:{shape:"Sa"},http:{}}},shapes:{S4:{type:"map",key:{},value:{}},S8:{type:"list",member:{}},Sa:{type:"structure",required:["IdentityPoolId","IdentityPoolName","AllowUnauthenticatedIdentities"],members:{IdentityPoolId:{},IdentityPoolName:{},AllowUnauthenticatedIdentities:{type:"boolean"},SupportedLoginProviders:{shape:"S4"},DeveloperProviderName:{},OpenIdConnectProviderARNs:{shape:"S8"}}},Sf:{type:"structure",members:{IdentityId:{},Logins:{shape:"Sg"},CreationDate:{type:"timestamp"},LastModifiedDate:{type:"timestamp"}}},Sg:{type:"list",member:{}},Sk:{type:"map",key:{},value:{}},Sw:{type:"map",key:{},value:{}}}},r.apiLoader.services.cognitosync={},r.CognitoSync=r.Service.defineService("cognitosync",["2014-06-30"]),r.apiLoader.services.cognitosync["2014-06-30"]={metadata:{apiVersion:"2014-06-30",endpointPrefix:"cognito-sync",jsonVersion:"1.1",serviceFullName:"Amazon Cognito Sync",signatureVersion:"v4",protocol:"rest-json"},operations:{DeleteDataset:{http:{method:"DELETE",requestUri:"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",responseCode:200},input:{type:"structure",required:["IdentityPoolId","IdentityId","DatasetName"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},IdentityId:{location:"uri",locationName:"IdentityId"},DatasetName:{location:"uri",locationName:"DatasetName"}}},output:{type:"structure",members:{Dataset:{shape:"S6"}}}},DescribeDataset:{http:{method:"GET",requestUri:"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",responseCode:200},input:{type:"structure",required:["IdentityPoolId","IdentityId","DatasetName"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},IdentityId:{location:"uri",locationName:"IdentityId"},DatasetName:{location:"uri",locationName:"DatasetName"}}},output:{type:"structure",members:{Dataset:{shape:"S6"}}}},DescribeIdentityPoolUsage:{http:{method:"GET",requestUri:"/identitypools/{IdentityPoolId}",responseCode:200},input:{type:"structure",required:["IdentityPoolId"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"}}},output:{type:"structure",members:{IdentityPoolUsage:{shape:"Se"}}}},DescribeIdentityUsage:{http:{method:"GET",requestUri:"/identitypools/{IdentityPoolId}/identities/{IdentityId}",responseCode:200},input:{type:"structure",required:["IdentityPoolId","IdentityId"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},IdentityId:{location:"uri",locationName:"IdentityId"}}},output:{type:"structure",members:{IdentityUsage:{type:"structure",members:{IdentityId:{},IdentityPoolId:{},LastModifiedDate:{type:"timestamp"},DatasetCount:{type:"integer"},DataStorage:{type:"long"}}}}}},GetIdentityPoolConfiguration:{http:{method:"GET",requestUri:"/identitypools/{IdentityPoolId}/configuration",responseCode:200},input:{type:"structure",required:["IdentityPoolId"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"}}},output:{type:"structure",members:{IdentityPoolId:{},PushSync:{shape:"Sl"}}}},ListDatasets:{http:{method:"GET",requestUri:"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets",responseCode:200},input:{type:"structure",required:["IdentityId","IdentityPoolId"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},IdentityId:{location:"uri",locationName:"IdentityId"},NextToken:{location:"querystring",locationName:"nextToken"},MaxResults:{location:"querystring",locationName:"maxResults",type:"integer"}}},output:{type:"structure",members:{Datasets:{type:"list",member:{shape:"S6"}},Count:{type:"integer"},NextToken:{}}}},ListIdentityPoolUsage:{http:{method:"GET",requestUri:"/identitypools",responseCode:200},input:{type:"structure",members:{NextToken:{location:"querystring",locationName:"nextToken"},MaxResults:{location:"querystring",locationName:"maxResults",type:"integer"}}},output:{type:"structure",members:{IdentityPoolUsages:{type:"list",member:{shape:"Se"}},MaxResults:{type:"integer"},Count:{type:"integer"},NextToken:{}}}},ListRecords:{http:{method:"GET",requestUri:"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records",responseCode:200},input:{type:"structure",required:["IdentityPoolId","IdentityId","DatasetName"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},IdentityId:{location:"uri",locationName:"IdentityId"},DatasetName:{location:"uri",locationName:"DatasetName"},LastSyncCount:{location:"querystring",locationName:"lastSyncCount",type:"long"},NextToken:{location:"querystring",locationName:"nextToken"},MaxResults:{location:"querystring",locationName:"maxResults",type:"integer"},SyncSessionToken:{location:"querystring",locationName:"syncSessionToken"}}},output:{type:"structure",members:{Records:{shape:"Sz"},NextToken:{},Count:{type:"integer"},DatasetSyncCount:{type:"long"},LastModifiedBy:{},MergedDatasetNames:{type:"list",member:{}},DatasetExists:{type:"boolean"},DatasetDeletedAfterRequestedSyncCount:{type:"boolean"},SyncSessionToken:{}}}},RegisterDevice:{http:{requestUri:"/identitypools/{IdentityPoolId}/identity/{IdentityId}/device",responseCode:200},input:{type:"structure",required:["IdentityPoolId","IdentityId","Platform","Token"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},IdentityId:{location:"uri",locationName:"IdentityId"},Platform:{},Token:{}}},output:{type:"structure",members:{DeviceId:{}}}},SetIdentityPoolConfiguration:{http:{requestUri:"/identitypools/{IdentityPoolId}/configuration",responseCode:200},input:{type:"structure",required:["IdentityPoolId"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},PushSync:{shape:"Sl"}}},output:{type:"structure",members:{IdentityPoolId:{},PushSync:{shape:"Sl"}}}},SubscribeToDataset:{http:{requestUri:"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",responseCode:200},input:{type:"structure",required:["IdentityPoolId","IdentityId","DatasetName","DeviceId"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},IdentityId:{location:"uri",locationName:"IdentityId"},DatasetName:{location:"uri",locationName:"DatasetName"},DeviceId:{location:"uri",locationName:"DeviceId"}}},output:{type:"structure",members:{}}},UnsubscribeFromDataset:{http:{method:"DELETE",requestUri:"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",responseCode:200},input:{type:"structure",required:["IdentityPoolId","IdentityId","DatasetName","DeviceId"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},IdentityId:{location:"uri",locationName:"IdentityId"},DatasetName:{location:"uri",locationName:"DatasetName"},DeviceId:{location:"uri",locationName:"DeviceId"}}},output:{type:"structure",members:{}}},UpdateRecords:{http:{requestUri:"/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",responseCode:200},input:{type:"structure",required:["IdentityPoolId","IdentityId","DatasetName","SyncSessionToken"],members:{IdentityPoolId:{location:"uri",locationName:"IdentityPoolId"},IdentityId:{location:"uri",locationName:"IdentityId"},DatasetName:{location:"uri",locationName:"DatasetName"},DeviceId:{},RecordPatches:{type:"list",member:{type:"structure",required:["Op","Key","SyncCount"],members:{Op:{},Key:{},Value:{},SyncCount:{type:"long"},DeviceLastModifiedDate:{type:"timestamp"}}}},SyncSessionToken:{},ClientContext:{location:"header",locationName:"x-amz-Client-Context"}}},output:{type:"structure",members:{Records:{shape:"Sz"}}}}},shapes:{S6:{type:"structure",members:{IdentityId:{},DatasetName:{},CreationDate:{type:"timestamp"},LastModifiedDate:{type:"timestamp"},LastModifiedBy:{},DataStorage:{type:"long"},NumRecords:{type:"long"}}},Se:{type:"structure",members:{IdentityPoolId:{},SyncSessionsCount:{type:"long"},DataStorage:{type:"long"},LastModifiedDate:{type:"timestamp"}}},Sl:{type:"structure",members:{ApplicationArns:{type:"list",member:{}},RoleArn:{}}},Sz:{type:"list",member:{type:"structure",members:{Key:{},Value:{},SyncCount:{type:"long"},LastModifiedDate:{type:"timestamp"},LastModifiedBy:{},DeviceLastModifiedDate:{type:"timestamp"}}}}}},r.apiLoader.services.dynamodb={},r.DynamoDB=r.Service.defineService("dynamodb",["2011-12-05","2012-08-10"]),e("./services/dynamodb"),r.apiLoader.services.dynamodb["2012-08-10"]={metadata:{apiVersion:"2012-08-10",endpointPrefix:"dynamodb",jsonVersion:"1.0",serviceAbbreviation:"DynamoDB",serviceFullName:"Amazon DynamoDB",signatureVersion:"v4",targetPrefix:"DynamoDB_20120810",protocol:"json"},operations:{BatchGetItem:{input:{type:"structure",required:["RequestItems"],members:{RequestItems:{shape:"S2"},ReturnConsumedCapacity:{}}},output:{type:"structure",members:{Responses:{type:"map",key:{},value:{shape:"Sr"}},UnprocessedKeys:{shape:"S2"},ConsumedCapacity:{shape:"St"}}},http:{}},BatchWriteItem:{input:{type:"structure",required:["RequestItems"],members:{RequestItems:{shape:"S10"},ReturnConsumedCapacity:{},ReturnItemCollectionMetrics:{}}},output:{type:"structure",members:{UnprocessedItems:{shape:"S10"},ItemCollectionMetrics:{type:"map",key:{},value:{type:"list",member:{shape:"S1a"}}},ConsumedCapacity:{shape:"St"}}},http:{}},CreateTable:{input:{type:"structure",required:["AttributeDefinitions","TableName","KeySchema","ProvisionedThroughput"],members:{AttributeDefinitions:{shape:"S1f"},TableName:{},KeySchema:{shape:"S1j"},LocalSecondaryIndexes:{type:"list",member:{type:"structure",required:["IndexName","KeySchema","Projection"],members:{IndexName:{},KeySchema:{shape:"S1j"},Projection:{shape:"S1o"}}}},GlobalSecondaryIndexes:{type:"list",member:{type:"structure",required:["IndexName","KeySchema","Projection","ProvisionedThroughput"],members:{IndexName:{},KeySchema:{shape:"S1j"},Projection:{shape:"S1o"},ProvisionedThroughput:{shape:"S1u"}}}},ProvisionedThroughput:{shape:"S1u"}}},output:{type:"structure",members:{TableDescription:{shape:"S1x"}}},http:{}},DeleteItem:{input:{type:"structure",required:["TableName","Key"],members:{TableName:{},Key:{shape:"S6"},Expected:{shape:"S29"},ConditionalOperator:{},ReturnValues:{},ReturnConsumedCapacity:{},ReturnItemCollectionMetrics:{},ConditionExpression:{},ExpressionAttributeNames:{shape:"Sm"},ExpressionAttributeValues:{shape:"S2h"}}},output:{type:"structure",members:{Attributes:{shape:"Ss"},ConsumedCapacity:{shape:"Su"},ItemCollectionMetrics:{shape:"S1a"}}},http:{}},DeleteTable:{input:{type:"structure",required:["TableName"],members:{TableName:{}}},output:{type:"structure",members:{TableDescription:{shape:"S1x"}}},http:{}},DescribeTable:{input:{type:"structure",required:["TableName"],members:{TableName:{}}},output:{type:"structure",members:{Table:{shape:"S1x"}}},http:{}},GetItem:{input:{type:"structure",required:["TableName","Key"],members:{TableName:{},Key:{shape:"S6"},AttributesToGet:{shape:"Sj"},ConsistentRead:{type:"boolean"},ReturnConsumedCapacity:{},ProjectionExpression:{},ExpressionAttributeNames:{shape:"Sm"}}},output:{type:"structure",members:{Item:{shape:"Ss"},ConsumedCapacity:{shape:"Su"}}},http:{}},ListTables:{input:{type:"structure",members:{ExclusiveStartTableName:{},Limit:{type:"integer"}}},output:{type:"structure",members:{TableNames:{type:"list",member:{}},LastEvaluatedTableName:{}}},http:{}},PutItem:{input:{type:"structure",required:["TableName","Item"],members:{TableName:{},Item:{shape:"S14"},Expected:{shape:"S29"},ReturnValues:{},ReturnConsumedCapacity:{},ReturnItemCollectionMetrics:{},ConditionalOperator:{},ConditionExpression:{},ExpressionAttributeNames:{shape:"Sm"},ExpressionAttributeValues:{shape:"S2h"}}},output:{type:"structure",members:{Attributes:{shape:"Ss"},ConsumedCapacity:{shape:"Su"},ItemCollectionMetrics:{shape:"S1a"}}},http:{}},Query:{input:{type:"structure",required:["TableName","KeyConditions"],members:{TableName:{},IndexName:{},Select:{},AttributesToGet:{shape:"Sj"},Limit:{type:"integer"},ConsistentRead:{type:"boolean"},KeyConditions:{type:"map",key:{},value:{shape:"S30"}},QueryFilter:{shape:"S31"},ConditionalOperator:{},ScanIndexForward:{type:"boolean"},ExclusiveStartKey:{shape:"S6"},ReturnConsumedCapacity:{},ProjectionExpression:{},FilterExpression:{},ExpressionAttributeNames:{shape:"Sm"},ExpressionAttributeValues:{shape:"S2h"}}},output:{type:"structure",members:{Items:{shape:"Sr"},Count:{type:"integer"},ScannedCount:{type:"integer"},LastEvaluatedKey:{shape:"S6"},ConsumedCapacity:{shape:"Su"}}},http:{}},Scan:{input:{type:"structure",required:["TableName"],members:{TableName:{},IndexName:{},AttributesToGet:{shape:"Sj"},Limit:{type:"integer"},Select:{},ScanFilter:{shape:"S31"},ConditionalOperator:{},ExclusiveStartKey:{shape:"S6"},ReturnConsumedCapacity:{},TotalSegments:{type:"integer"},Segment:{type:"integer"},ProjectionExpression:{},FilterExpression:{},ExpressionAttributeNames:{shape:"Sm"},ExpressionAttributeValues:{shape:"S2h"}}},output:{type:"structure",members:{Items:{shape:"Sr"},Count:{type:"integer"},ScannedCount:{type:"integer"},LastEvaluatedKey:{shape:"S6"},ConsumedCapacity:{shape:"Su"}}},http:{}},UpdateItem:{input:{type:"structure",required:["TableName","Key"],members:{TableName:{},Key:{shape:"S6"},AttributeUpdates:{type:"map",key:{},value:{type:"structure",members:{Value:{shape:"S8"},Action:{}}}},Expected:{shape:"S29"},ConditionalOperator:{},ReturnValues:{},ReturnConsumedCapacity:{},ReturnItemCollectionMetrics:{},UpdateExpression:{},ConditionExpression:{},ExpressionAttributeNames:{shape:"Sm"},ExpressionAttributeValues:{shape:"S2h"}}},output:{type:"structure",members:{Attributes:{shape:"Ss"},ConsumedCapacity:{shape:"Su"},ItemCollectionMetrics:{shape:"S1a"}}},http:{}},UpdateTable:{input:{type:"structure",required:["TableName"],members:{AttributeDefinitions:{shape:"S1f"},TableName:{},ProvisionedThroughput:{shape:"S1u"},GlobalSecondaryIndexUpdates:{type:"list",member:{type:"structure",members:{Update:{type:"structure",required:["IndexName","ProvisionedThroughput"],members:{IndexName:{},ProvisionedThroughput:{shape:"S1u"}}},Create:{type:"structure",required:["IndexName","KeySchema","Projection","ProvisionedThroughput"],members:{IndexName:{},KeySchema:{shape:"S1j"},Projection:{shape:"S1o"},ProvisionedThroughput:{shape:"S1u"}}},Delete:{type:"structure",required:["IndexName"],members:{IndexName:{}}}}}}}},output:{type:"structure",members:{TableDescription:{shape:"S1x"}}},http:{}}},shapes:{S2:{type:"map",key:{},value:{type:"structure",required:["Keys"],members:{Keys:{type:"list",member:{shape:"S6"}},AttributesToGet:{shape:"Sj"},ConsistentRead:{type:"boolean"},ProjectionExpression:{},ExpressionAttributeNames:{shape:"Sm"}}}},S6:{type:"map",key:{},value:{shape:"S8"}},S8:{type:"structure",members:{S:{},N:{},B:{type:"blob"},SS:{type:"list",member:{}},NS:{type:"list",member:{}},BS:{type:"list",member:{type:"blob"}},M:{type:"map",key:{},value:{shape:"S8"}},L:{type:"list",member:{shape:"S8"}},NULL:{type:"boolean"},BOOL:{type:"boolean"}}},Sj:{type:"list",member:{}},Sm:{type:"map",key:{},value:{}},Sr:{type:"list",member:{shape:"Ss"}},Ss:{type:"map",key:{},value:{shape:"S8"}},St:{type:"list",member:{shape:"Su"}},Su:{type:"structure",members:{TableName:{},CapacityUnits:{type:"double"},Table:{shape:"Sw"},LocalSecondaryIndexes:{shape:"Sx"},GlobalSecondaryIndexes:{shape:"Sx"}}},Sw:{type:"structure",members:{CapacityUnits:{type:"double"}}},Sx:{type:"map",key:{},value:{shape:"Sw"}},S10:{type:"map",key:{},value:{type:"list",member:{type:"structure",members:{PutRequest:{type:"structure",required:["Item"],members:{Item:{shape:"S14"}}},DeleteRequest:{type:"structure",required:["Key"],members:{Key:{shape:"S6"}}}}}}},S14:{type:"map",key:{},value:{shape:"S8"}},S1a:{type:"structure",members:{ItemCollectionKey:{type:"map",key:{},value:{shape:"S8"}},SizeEstimateRangeGB:{type:"list",member:{type:"double"}}}},S1f:{type:"list",member:{type:"structure",required:["AttributeName","AttributeType"],members:{AttributeName:{},AttributeType:{}}}},S1j:{type:"list",member:{type:"structure",required:["AttributeName","KeyType"],members:{AttributeName:{},KeyType:{}}}},S1o:{type:"structure",members:{ProjectionType:{},NonKeyAttributes:{type:"list",member:{}}}},S1u:{type:"structure",required:["ReadCapacityUnits","WriteCapacityUnits"],members:{ReadCapacityUnits:{type:"long"},WriteCapacityUnits:{type:"long"}}},S1x:{type:"structure",members:{AttributeDefinitions:{shape:"S1f"},TableName:{},KeySchema:{shape:"S1j"},TableStatus:{},CreationDateTime:{type:"timestamp"},ProvisionedThroughput:{shape:"S20"},TableSizeBytes:{type:"long"},ItemCount:{type:"long"},LocalSecondaryIndexes:{type:"list",member:{type:"structure",members:{IndexName:{},KeySchema:{shape:"S1j"},Projection:{shape:"S1o"},IndexSizeBytes:{type:"long"},ItemCount:{type:"long"}}}},GlobalSecondaryIndexes:{type:"list",member:{type:"structure",members:{IndexName:{},KeySchema:{shape:"S1j"},Projection:{shape:"S1o"},IndexStatus:{},Backfilling:{type:"boolean"},ProvisionedThroughput:{shape:"S20"},IndexSizeBytes:{type:"long"},ItemCount:{type:"long"}}}}}},S20:{type:"structure",members:{LastIncreaseDateTime:{type:"timestamp"},LastDecreaseDateTime:{type:"timestamp"},NumberOfDecreasesToday:{type:"long"},ReadCapacityUnits:{type:"long"},WriteCapacityUnits:{type:"long"}}},S29:{type:"map",key:{},value:{type:"structure",members:{Value:{shape:"S8"},Exists:{type:"boolean"},ComparisonOperator:{},AttributeValueList:{shape:"S2d"}}}},S2d:{type:"list",member:{shape:"S8"}},S2h:{type:"map",key:{},value:{shape:"S8"}},S30:{type:"structure",required:["ComparisonOperator"],members:{AttributeValueList:{shape:"S2d"},ComparisonOperator:{}}},S31:{type:"map",key:{},value:{shape:"S30"}}},paginators:{BatchGetItem:{input_token:"RequestItems",output_token:"UnprocessedKeys"},ListTables:{input_token:"ExclusiveStartTableName",output_token:"LastEvaluatedTableName",limit_key:"Limit",result_key:"TableNames"},Query:{input_token:"ExclusiveStartKey",output_token:"LastEvaluatedKey",limit_key:"Limit",result_key:"Items"},Scan:{input_token:"ExclusiveStartKey",output_token:"LastEvaluatedKey",limit_key:"Limit",result_key:"Items"}},waiters:{__default__:{interval:20,max_attempts:25},__TableState:{operation:"DescribeTable"},TableExists:{"extends":"__TableState",ignore_errors:["ResourceNotFoundException"],success_type:"output",success_path:"Table.TableStatus",success_value:"ACTIVE"},TableNotExists:{"extends":"__TableState",success_type:"error",success_value:"ResourceNotFoundException"}}},r.apiLoader.services.elastictranscoder={},r.ElasticTranscoder=r.Service.defineService("elastictranscoder",["2012-09-25"]),r.apiLoader.services.elastictranscoder["2012-09-25"]={metadata:{apiVersion:"2012-09-25",endpointPrefix:"elastictranscoder",serviceFullName:"Amazon Elastic Transcoder",signatureVersion:"v4",protocol:"rest-json"},operations:{CancelJob:{http:{method:"DELETE",requestUri:"/2012-09-25/jobs/{Id}",responseCode:202},input:{type:"structure",required:["Id"],members:{Id:{location:"uri",locationName:"Id"}}},output:{type:"structure",members:{}}},CreateJob:{http:{requestUri:"/2012-09-25/jobs",responseCode:201},input:{type:"structure",required:["PipelineId","Input"],members:{PipelineId:{},Input:{shape:"S5"},Output:{shape:"Sg"},Outputs:{type:"list",member:{shape:"Sg"}},OutputKeyPrefix:{},Playlists:{type:"list",member:{type:"structure",members:{Name:{},Format:{},OutputKeys:{shape:"S1f"},HlsContentProtection:{shape:"S1g"}}}},UserMetadata:{shape:"S1k"}}},output:{type:"structure",members:{Job:{shape:"S1n"}}}},CreatePipeline:{http:{requestUri:"/2012-09-25/pipelines",responseCode:201},input:{type:"structure",required:["Name","InputBucket","Role"],members:{Name:{},InputBucket:{},OutputBucket:{},Role:{},AwsKmsKeyArn:{},Notifications:{shape:"S20"},ContentConfig:{shape:"S22"},ThumbnailConfig:{shape:"S22"}}},output:{type:"structure",members:{Pipeline:{shape:"S2b"}}}},CreatePreset:{http:{requestUri:"/2012-09-25/presets",responseCode:201},input:{type:"structure",required:["Name","Container"],members:{Name:{},Description:{},Container:{},Video:{shape:"S2f"},Audio:{shape:"S2v"},Thumbnails:{shape:"S32"}}},output:{type:"structure",members:{Preset:{shape:"S36"},Warning:{}}}},DeletePipeline:{http:{method:"DELETE",requestUri:"/2012-09-25/pipelines/{Id}",responseCode:202},input:{type:"structure",required:["Id"],members:{Id:{location:"uri",locationName:"Id"}}},output:{type:"structure",members:{}}},DeletePreset:{http:{method:"DELETE",requestUri:"/2012-09-25/presets/{Id}",responseCode:202},input:{type:"structure",required:["Id"],members:{Id:{location:"uri",locationName:"Id"}}},output:{type:"structure",members:{}}},ListJobsByPipeline:{http:{method:"GET",requestUri:"/2012-09-25/jobsByPipeline/{PipelineId}"},input:{type:"structure",required:["PipelineId"],members:{PipelineId:{location:"uri",locationName:"PipelineId"},Ascending:{location:"querystring",locationName:"Ascending"},PageToken:{location:"querystring",locationName:"PageToken"}}},output:{type:"structure",members:{Jobs:{shape:"S3f"},NextPageToken:{}}}},ListJobsByStatus:{http:{method:"GET",requestUri:"/2012-09-25/jobsByStatus/{Status}"},input:{type:"structure",required:["Status"],members:{Status:{location:"uri",locationName:"Status"},Ascending:{location:"querystring",locationName:"Ascending"},PageToken:{location:"querystring",locationName:"PageToken"}}},output:{type:"structure",members:{Jobs:{shape:"S3f"},NextPageToken:{}}}},ListPipelines:{http:{method:"GET",requestUri:"/2012-09-25/pipelines"},input:{type:"structure",members:{Ascending:{location:"querystring",locationName:"Ascending"},PageToken:{location:"querystring",locationName:"PageToken"}}},output:{type:"structure",members:{Pipelines:{type:"list",member:{shape:"S2b"}},NextPageToken:{}}}},ListPresets:{http:{method:"GET",requestUri:"/2012-09-25/presets"},input:{type:"structure",members:{Ascending:{location:"querystring",locationName:"Ascending"},PageToken:{location:"querystring",locationName:"PageToken"}}},output:{type:"structure",members:{Presets:{type:"list",member:{shape:"S36"}},NextPageToken:{}}}},ReadJob:{http:{method:"GET",requestUri:"/2012-09-25/jobs/{Id}"},input:{type:"structure",required:["Id"],members:{Id:{location:"uri",locationName:"Id"}}},output:{type:"structure",members:{Job:{shape:"S1n"}}}},ReadPipeline:{http:{method:"GET",requestUri:"/2012-09-25/pipelines/{Id}"},input:{type:"structure",required:["Id"],members:{Id:{location:"uri",locationName:"Id"}}},output:{type:"structure",members:{Pipeline:{shape:"S2b"}}}},ReadPreset:{http:{method:"GET",requestUri:"/2012-09-25/presets/{Id}"},input:{type:"structure",required:["Id"],members:{Id:{location:"uri",locationName:"Id"}}},output:{type:"structure",members:{Preset:{shape:"S36"}}}},TestRole:{http:{requestUri:"/2012-09-25/roleTests",responseCode:200},input:{type:"structure",required:["Role","InputBucket","OutputBucket","Topics"],members:{Role:{},InputBucket:{},OutputBucket:{},Topics:{type:"list",member:{}}}},output:{type:"structure",members:{Success:{},Messages:{type:"list",member:{}}}}},UpdatePipeline:{http:{method:"PUT",requestUri:"/2012-09-25/pipelines/{Id}",responseCode:200},input:{type:"structure",required:["Id"],members:{Id:{location:"uri",locationName:"Id"},Name:{},InputBucket:{},Role:{},AwsKmsKeyArn:{},Notifications:{shape:"S20"},ContentConfig:{shape:"S22"},ThumbnailConfig:{shape:"S22"}}},output:{type:"structure",members:{Pipeline:{shape:"S2b"}}}},UpdatePipelineNotifications:{http:{requestUri:"/2012-09-25/pipelines/{Id}/notifications"},input:{type:"structure",required:["Id","Notifications"],members:{Id:{location:"uri",locationName:"Id"},Notifications:{shape:"S20"}}},output:{type:"structure",members:{Pipeline:{shape:"S2b"}}}},UpdatePipelineStatus:{http:{requestUri:"/2012-09-25/pipelines/{Id}/status"},input:{type:"structure",required:["Id","Status"],members:{Id:{location:"uri",locationName:"Id"},Status:{}}},output:{type:"structure",members:{Pipeline:{shape:"S2b"}}}}},shapes:{S5:{type:"structure",members:{Key:{},FrameRate:{},Resolution:{},AspectRatio:{},Interlaced:{},Container:{},Encryption:{shape:"Sc"}}},Sc:{type:"structure",members:{Mode:{},Key:{},KeyMd5:{},InitializationVector:{}}},Sg:{type:"structure",members:{Key:{},ThumbnailPattern:{},ThumbnailEncryption:{shape:"Sc"},Rotate:{},PresetId:{},SegmentDuration:{},Watermarks:{shape:"Sk"},AlbumArt:{shape:"So"},Composition:{shape:"Sw"},Captions:{shape:"S10"},Encryption:{shape:"Sc"}}},Sk:{type:"list",member:{type:"structure",members:{PresetWatermarkId:{},InputKey:{},Encryption:{shape:"Sc"}}}},So:{type:"structure",members:{MergePolicy:{},Artwork:{type:"list",member:{type:"structure",members:{InputKey:{},MaxWidth:{},MaxHeight:{},SizingPolicy:{},PaddingPolicy:{},AlbumArtFormat:{},Encryption:{shape:"Sc"}}}}}},Sw:{type:"list",member:{type:"structure",members:{TimeSpan:{type:"structure",members:{StartTime:{},Duration:{}}}}}},S10:{type:"structure",members:{MergePolicy:{},CaptionSources:{type:"list",member:{type:"structure",members:{Key:{},Language:{},TimeOffset:{},Label:{},Encryption:{shape:"Sc"}}}},CaptionFormats:{type:"list",member:{type:"structure",members:{Format:{},Pattern:{},Encryption:{shape:"Sc"}}}}}},S1f:{type:"list",member:{}},S1g:{type:"structure",members:{Method:{},Key:{},KeyMd5:{},InitializationVector:{},LicenseAcquisitionUrl:{},KeyStoragePolicy:{}}},S1k:{type:"map",key:{},value:{}},S1n:{type:"structure",members:{Id:{},Arn:{},PipelineId:{},Input:{shape:"S5"},Output:{shape:"S1o"},Outputs:{type:"list",member:{shape:"S1o"}},OutputKeyPrefix:{},Playlists:{type:"list",member:{type:"structure",members:{Name:{},Format:{},OutputKeys:{shape:"S1f"},HlsContentProtection:{shape:"S1g"},Status:{},StatusDetail:{}}}},Status:{},UserMetadata:{shape:"S1k"}}},S1o:{type:"structure",members:{Id:{},Key:{},ThumbnailPattern:{},ThumbnailEncryption:{shape:"Sc"},Rotate:{},PresetId:{},SegmentDuration:{},Status:{},StatusDetail:{},Duration:{type:"long"},Width:{type:"integer"},Height:{type:"integer"},Watermarks:{shape:"Sk"},AlbumArt:{shape:"So"},Composition:{shape:"Sw"},Captions:{shape:"S10"},Encryption:{shape:"Sc"}}},S20:{type:"structure",members:{Progressing:{},Completed:{},Warning:{},Error:{}}},S22:{type:"structure",members:{Bucket:{},StorageClass:{},Permissions:{type:"list",member:{type:"structure",members:{GranteeType:{},Grantee:{},Access:{type:"list",member:{}}}}}}},S2b:{type:"structure",members:{Id:{},Arn:{},Name:{},Status:{},InputBucket:{},OutputBucket:{},Role:{},AwsKmsKeyArn:{},Notifications:{shape:"S20"},ContentConfig:{shape:"S22"},ThumbnailConfig:{shape:"S22"}}},S2f:{type:"structure",members:{Codec:{},CodecOptions:{type:"map",key:{},value:{}},KeyframesMaxDist:{},FixedGOP:{},BitRate:{},FrameRate:{},MaxFrameRate:{},Resolution:{},AspectRatio:{},MaxWidth:{},MaxHeight:{},DisplayAspectRatio:{},SizingPolicy:{},PaddingPolicy:{},Watermarks:{type:"list",member:{type:"structure",members:{Id:{},MaxWidth:{},MaxHeight:{},SizingPolicy:{},HorizontalAlign:{},HorizontalOffset:{},VerticalAlign:{},VerticalOffset:{},Opacity:{},Target:{}}}}}},S2v:{type:"structure",members:{Codec:{},SampleRate:{},BitRate:{},Channels:{},CodecOptions:{type:"structure",members:{Profile:{}}}}},S32:{type:"structure",members:{Format:{},Interval:{},Resolution:{},AspectRatio:{},MaxWidth:{},MaxHeight:{},SizingPolicy:{},PaddingPolicy:{}}},S36:{type:"structure",members:{Id:{},Arn:{},Name:{},Description:{},Container:{},Audio:{shape:"S2v"},Video:{shape:"S2f"},Thumbnails:{shape:"S32"},Type:{}}},S3f:{type:"list",member:{shape:"S1n"}}},paginators:{ListJobsByPipeline:{input_token:"PageToken",output_token:"NextPageToken",result_key:"Jobs"},ListJobsByStatus:{input_token:"PageToken",output_token:"NextPageToken",result_key:"Jobs"},ListPipelines:{input_token:"PageToken",output_token:"NextPageToken",result_key:"Pipelines"},ListPresets:{input_token:"PageToken",output_token:"NextPageToken",result_key:"Presets"}},waiters:{JobComplete:{operation:"ReadJob",success_type:"output",success_path:"Job.Status",interval:30,max_attempts:120,success_value:"Complete",failure_value:["Canceled","Error"]}}},r.apiLoader.services.kinesis={},r.Kinesis=r.Service.defineService("kinesis",["2013-12-02"]),r.apiLoader.services.kinesis["2013-12-02"]={metadata:{apiVersion:"2013-12-02",endpointPrefix:"kinesis",jsonVersion:"1.1",serviceAbbreviation:"Kinesis",serviceFullName:"Amazon Kinesis",signatureVersion:"v4",targetPrefix:"Kinesis_20131202",protocol:"json"},operations:{AddTagsToStream:{input:{type:"structure",required:["StreamName","Tags"],members:{StreamName:{},Tags:{type:"map",key:{},value:{}}}},http:{}},CreateStream:{input:{type:"structure",required:["StreamName","ShardCount"],members:{StreamName:{},ShardCount:{type:"integer"}}},http:{}},DeleteStream:{input:{type:"structure",required:["StreamName"],members:{StreamName:{}}},http:{}},DescribeStream:{input:{type:"structure",required:["StreamName"],members:{StreamName:{},Limit:{type:"integer"},ExclusiveStartShardId:{}}},output:{type:"structure",required:["StreamDescription"],members:{StreamDescription:{type:"structure",required:["StreamName","StreamARN","StreamStatus","Shards","HasMoreShards"],members:{StreamName:{},StreamARN:{},StreamStatus:{},Shards:{type:"list",member:{type:"structure",required:["ShardId","HashKeyRange","SequenceNumberRange"],members:{ShardId:{},ParentShardId:{},AdjacentParentShardId:{},HashKeyRange:{type:"structure",required:["StartingHashKey","EndingHashKey"],members:{StartingHashKey:{},EndingHashKey:{}}},SequenceNumberRange:{type:"structure",required:["StartingSequenceNumber"],members:{StartingSequenceNumber:{},EndingSequenceNumber:{}}}}}},HasMoreShards:{type:"boolean"}}}}},http:{}},GetRecords:{input:{type:"structure",required:["ShardIterator"],members:{ShardIterator:{},Limit:{type:"integer"}}},output:{type:"structure",required:["Records"],members:{Records:{type:"list",member:{type:"structure",required:["SequenceNumber","Data","PartitionKey"],members:{SequenceNumber:{},Data:{type:"blob"},PartitionKey:{}}}},NextShardIterator:{}}},http:{}},GetShardIterator:{input:{type:"structure",required:["StreamName","ShardId","ShardIteratorType"],members:{StreamName:{},ShardId:{},ShardIteratorType:{},StartingSequenceNumber:{}}},output:{type:"structure",members:{ShardIterator:{}}},http:{}},ListStreams:{input:{type:"structure",members:{Limit:{type:"integer"},ExclusiveStartStreamName:{}}},output:{type:"structure",required:["StreamNames","HasMoreStreams"],members:{StreamNames:{type:"list",member:{}},HasMoreStreams:{type:"boolean"}}},http:{}},ListTagsForStream:{input:{type:"structure",required:["StreamName"],members:{StreamName:{},ExclusiveStartTagKey:{},Limit:{type:"integer"}}},output:{type:"structure",required:["Tags","HasMoreTags"],members:{Tags:{type:"list",member:{type:"structure",required:["Key"],members:{Key:{},Value:{}}}},HasMoreTags:{type:"boolean"}}},http:{}},MergeShards:{input:{type:"structure",required:["StreamName","ShardToMerge","AdjacentShardToMerge"],members:{StreamName:{},ShardToMerge:{},AdjacentShardToMerge:{}}},http:{}},PutRecord:{input:{type:"structure",required:["StreamName","Data","PartitionKey"],members:{StreamName:{},Data:{type:"blob"},PartitionKey:{},ExplicitHashKey:{},SequenceNumberForOrdering:{}}},output:{type:"structure",required:["ShardId","SequenceNumber"],members:{ShardId:{},SequenceNumber:{}}},http:{}},PutRecords:{input:{type:"structure",required:["Records","StreamName"],members:{Records:{type:"list",member:{type:"structure",required:["Data","PartitionKey"],members:{Data:{type:"blob"},ExplicitHashKey:{},PartitionKey:{}}}},StreamName:{}}},output:{type:"structure",required:["Records"],members:{FailedRecordCount:{type:"integer"},Records:{type:"list",member:{type:"structure",members:{SequenceNumber:{},ShardId:{},ErrorCode:{},ErrorMessage:{}}}}}},http:{}},RemoveTagsFromStream:{input:{type:"structure",required:["StreamName","TagKeys"],members:{StreamName:{},TagKeys:{type:"list",member:{}}}},http:{}},SplitShard:{input:{type:"structure",required:["StreamName","ShardToSplit","NewStartingHashKey"],members:{StreamName:{},ShardToSplit:{},NewStartingHashKey:{}}},http:{}}},shapes:{},paginators:{DescribeStream:{input_token:"ExclusiveStartShardId",limit_key:"Limit",more_results:"StreamDescription.HasMoreShards",output_token:"StreamDescription.Shards[-1].ShardId",result_key:"StreamDescription.Shards"},ListStreams:{input_token:"ExclusiveStartStreamName",limit_key:"Limit",more_results:"HasMoreStreams",output_token:"StreamNames[-1]",result_key:"StreamNames"}}},r.apiLoader.services.lambda={},r.Lambda=r.Service.defineService("lambda",["2014-11-11"]),r.apiLoader.services.lambda["2014-11-11"]={metadata:{apiVersion:"2014-11-11",endpointPrefix:"lambda",serviceFullName:"AWS Lambda",signatureVersion:"v4",protocol:"rest-json"},operations:{AddEventSource:{http:{requestUri:"/2014-11-13/event-source-mappings/"},input:{type:"structure",required:["EventSource","FunctionName","Role"],members:{EventSource:{},FunctionName:{},Role:{},BatchSize:{type:"integer"},Parameters:{shape:"S6"}}},output:{shape:"S7"}},DeleteFunction:{http:{method:"DELETE",requestUri:"/2014-11-13/functions/{FunctionName}",responseCode:204},input:{type:"structure",required:["FunctionName"],members:{FunctionName:{location:"uri",locationName:"FunctionName"}}}},GetEventSource:{http:{method:"GET",requestUri:"/2014-11-13/event-source-mappings/{UUID}",responseCode:200},input:{type:"structure",required:["UUID"],members:{UUID:{location:"uri",locationName:"UUID"}}},output:{shape:"S7"}},GetFunction:{http:{method:"GET",requestUri:"/2014-11-13/functions/{FunctionName}",responseCode:200},input:{type:"structure",required:["FunctionName"],members:{FunctionName:{location:"uri",locationName:"FunctionName"}}},output:{type:"structure",members:{Configuration:{shape:"Se"},Code:{type:"structure",members:{RepositoryType:{},Location:{}}}}}},GetFunctionConfiguration:{http:{method:"GET",requestUri:"/2014-11-13/functions/{FunctionName}/configuration",responseCode:200},input:{type:"structure",required:["FunctionName"],members:{FunctionName:{location:"uri",locationName:"FunctionName"}}},output:{shape:"Se"}},InvokeAsync:{http:{requestUri:"/2014-11-13/functions/{FunctionName}/invoke-async/",responseCode:202},input:{type:"structure",required:["FunctionName","InvokeArgs"],members:{FunctionName:{location:"uri",locationName:"FunctionName"},InvokeArgs:{shape:"Sq"}},payload:"InvokeArgs"},output:{type:"structure",members:{Status:{location:"statusCode",type:"integer"}}}},ListEventSources:{http:{method:"GET",requestUri:"/2014-11-13/event-source-mappings/",responseCode:200},input:{type:"structure",members:{EventSourceArn:{location:"querystring",locationName:"EventSource"},FunctionName:{location:"querystring",locationName:"FunctionName"},Marker:{location:"querystring",locationName:"Marker"},MaxItems:{location:"querystring",locationName:"MaxItems",type:"integer"}}},output:{type:"structure",members:{NextMarker:{},EventSources:{type:"list",member:{shape:"S7"}}}}},ListFunctions:{http:{method:"GET",requestUri:"/2014-11-13/functions/",responseCode:200},input:{type:"structure",members:{Marker:{location:"querystring",locationName:"Marker"},MaxItems:{location:"querystring",locationName:"MaxItems",type:"integer"}}},output:{type:"structure",members:{NextMarker:{},Functions:{type:"list",member:{shape:"Se"}}}}},RemoveEventSource:{http:{method:"DELETE",requestUri:"/2014-11-13/event-source-mappings/{UUID}",responseCode:204},input:{type:"structure",required:["UUID"],members:{UUID:{location:"uri",locationName:"UUID"}}}},UpdateFunctionConfiguration:{http:{method:"PUT",requestUri:"/2014-11-13/functions/{FunctionName}/configuration",responseCode:200},input:{type:"structure",required:["FunctionName"],members:{FunctionName:{location:"uri",locationName:"FunctionName"},Role:{location:"querystring",locationName:"Role"},Handler:{location:"querystring",locationName:"Handler"},Description:{location:"querystring",locationName:"Description"},Timeout:{location:"querystring",locationName:"Timeout",type:"integer"},MemorySize:{location:"querystring",locationName:"MemorySize",type:"integer"}}},output:{shape:"Se"}},UploadFunction:{http:{method:"PUT",requestUri:"/2014-11-13/functions/{FunctionName}",responseCode:201},input:{type:"structure",required:["FunctionName","FunctionZip","Runtime","Role","Handler","Mode"],members:{FunctionName:{location:"uri",locationName:"FunctionName"},FunctionZip:{shape:"Sq"},Runtime:{location:"querystring",locationName:"Runtime"},Role:{location:"querystring",locationName:"Role"},Handler:{location:"querystring",locationName:"Handler"},Mode:{location:"querystring",locationName:"Mode"},Description:{location:"querystring",locationName:"Description"},Timeout:{location:"querystring",locationName:"Timeout",type:"integer"},MemorySize:{location:"querystring",locationName:"MemorySize",type:"integer"}},payload:"FunctionZip"},output:{shape:"Se"}}},shapes:{S6:{type:"map",key:{},value:{}},S7:{type:"structure",members:{UUID:{},BatchSize:{type:"integer"},EventSource:{},FunctionName:{},Parameters:{shape:"S6"},Role:{},LastModified:{type:"timestamp"},IsActive:{type:"boolean"},Status:{}}},Se:{type:"structure",members:{FunctionName:{},FunctionARN:{},ConfigurationId:{},Runtime:{},Role:{},Handler:{},Mode:{},CodeSize:{type:"long"},Description:{},Timeout:{type:"integer"},MemorySize:{type:"integer"},LastModified:{type:"timestamp"}}},Sq:{type:"blob",streaming:!0}},paginators:{ListEventSources:{input_token:"Marker",output_token:"NextMarker",limit_key:"MaxItems",result_key:"EventSources"},ListFunctions:{input_token:"Marker",output_token:"NextMarker",limit_key:"MaxItems",result_key:"Functions"}}},r.apiLoader.services.s3={},r.S3=r.Service.defineService("s3",["2006-03-01"]),e("./services/s3"),r.apiLoader.services.s3["2006-03-01"]={metadata:{apiVersion:"2006-03-01",checksumFormat:"md5",endpointPrefix:"s3",globalEndpoint:"s3.amazonaws.com",serviceAbbreviation:"Amazon S3",serviceFullName:"Amazon Simple Storage Service",signatureVersion:"s3",timestampFormat:"rfc822",protocol:"rest-xml"},operations:{AbortMultipartUpload:{http:{method:"DELETE",requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","Key","UploadId"],members:{Bucket:{location:"uri",locationName:"Bucket"},Key:{location:"uri",locationName:"Key"},UploadId:{location:"querystring",locationName:"uploadId"}}}},CompleteMultipartUpload:{http:{requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","Key","UploadId"],members:{Bucket:{location:"uri",locationName:"Bucket"},Key:{location:"uri",locationName:"Key"},MultipartUpload:{locationName:"CompleteMultipartUpload",xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},type:"structure",members:{Parts:{locationName:"Part",type:"list",member:{type:"structure",members:{ETag:{},PartNumber:{type:"integer"}}},flattened:!0}}},UploadId:{location:"querystring",locationName:"uploadId"}},payload:"MultipartUpload"},output:{type:"structure",members:{Location:{},Bucket:{},Key:{},Expiration:{location:"header",locationName:"x-amz-expiration",type:"timestamp"},ETag:{},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},VersionId:{location:"header",locationName:"x-amz-version-id"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}}}},CopyObject:{http:{method:"PUT",requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","CopySource","Key"],members:{ACL:{location:"header",locationName:"x-amz-acl"},Bucket:{location:"uri",locationName:"Bucket"},CacheControl:{location:"header",locationName:"Cache-Control"},ContentDisposition:{location:"header",locationName:"Content-Disposition"},ContentEncoding:{location:"header",locationName:"Content-Encoding"},ContentLanguage:{location:"header",locationName:"Content-Language"},ContentType:{location:"header",locationName:"Content-Type"},CopySource:{location:"header",locationName:"x-amz-copy-source"},CopySourceIfMatch:{location:"header",locationName:"x-amz-copy-source-if-match"},CopySourceIfModifiedSince:{location:"header",locationName:"x-amz-copy-source-if-modified-since",type:"timestamp"},CopySourceIfNoneMatch:{location:"header",locationName:"x-amz-copy-source-if-none-match"},CopySourceIfUnmodifiedSince:{location:"header",locationName:"x-amz-copy-source-if-unmodified-since",type:"timestamp"},Expires:{location:"header",locationName:"Expires",type:"timestamp"},GrantFullControl:{location:"header",locationName:"x-amz-grant-full-control"},GrantRead:{location:"header",locationName:"x-amz-grant-read"},GrantReadACP:{location:"header",locationName:"x-amz-grant-read-acp"},GrantWriteACP:{location:"header",locationName:"x-amz-grant-write-acp"},Key:{location:"uri",locationName:"Key"},Metadata:{shape:"Sy",location:"headers",locationName:"x-amz-meta-"},MetadataDirective:{location:"header",locationName:"x-amz-metadata-directive"},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},StorageClass:{location:"header",locationName:"x-amz-storage-class"},WebsiteRedirectLocation:{location:"header",locationName:"x-amz-website-redirect-location"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKey:{shape:"S15",location:"header",locationName:"x-amz-server-side-encryption-customer-key"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"},CopySourceSSECustomerAlgorithm:{location:"header",locationName:"x-amz-copy-source-server-side-encryption-customer-algorithm"},CopySourceSSECustomerKey:{shape:"S18",location:"header",locationName:"x-amz-copy-source-server-side-encryption-customer-key"},CopySourceSSECustomerKeyMD5:{location:"header",locationName:"x-amz-copy-source-server-side-encryption-customer-key-MD5"}}},output:{type:"structure",members:{CopyObjectResult:{type:"structure",members:{ETag:{},LastModified:{type:"timestamp"}}},Expiration:{location:"header",locationName:"x-amz-expiration",type:"timestamp"},CopySourceVersionId:{location:"header",locationName:"x-amz-copy-source-version-id"},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}},payload:"CopyObjectResult"},alias:"PutObjectCopy"},CreateBucket:{http:{method:"PUT",requestUri:"/{Bucket}"},input:{type:"structure",required:["Bucket"],members:{ACL:{location:"header",locationName:"x-amz-acl"},Bucket:{location:"uri",locationName:"Bucket"},CreateBucketConfiguration:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"CreateBucketConfiguration",type:"structure",members:{LocationConstraint:{}}},GrantFullControl:{location:"header",locationName:"x-amz-grant-full-control"},GrantRead:{location:"header",locationName:"x-amz-grant-read"},GrantReadACP:{location:"header",locationName:"x-amz-grant-read-acp"},GrantWrite:{location:"header",locationName:"x-amz-grant-write"},GrantWriteACP:{location:"header",locationName:"x-amz-grant-write-acp"}},payload:"CreateBucketConfiguration"},output:{type:"structure",members:{Location:{location:"header",locationName:"Location"}}},alias:"PutBucket"},CreateMultipartUpload:{http:{requestUri:"/{Bucket}/{Key+}?uploads"},input:{type:"structure",required:["Bucket","Key"],members:{ACL:{location:"header",locationName:"x-amz-acl"},Bucket:{location:"uri",locationName:"Bucket"},CacheControl:{location:"header",locationName:"Cache-Control"},ContentDisposition:{location:"header",locationName:"Content-Disposition"},ContentEncoding:{location:"header",locationName:"Content-Encoding"},ContentLanguage:{location:"header",locationName:"Content-Language"},ContentType:{location:"header",locationName:"Content-Type"},Expires:{location:"header",locationName:"Expires",type:"timestamp"},GrantFullControl:{location:"header",locationName:"x-amz-grant-full-control"},GrantRead:{location:"header",locationName:"x-amz-grant-read"},GrantReadACP:{location:"header",locationName:"x-amz-grant-read-acp"},GrantWriteACP:{location:"header",locationName:"x-amz-grant-write-acp"},Key:{location:"uri",locationName:"Key"},Metadata:{shape:"Sy",location:"headers",locationName:"x-amz-meta-"},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},StorageClass:{location:"header",locationName:"x-amz-storage-class"},WebsiteRedirectLocation:{location:"header",locationName:"x-amz-website-redirect-location"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKey:{shape:"S15",location:"header",locationName:"x-amz-server-side-encryption-customer-key"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}}},output:{type:"structure",members:{Bucket:{locationName:"Bucket"},Key:{},UploadId:{},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}}},alias:"InitiateMultipartUpload"},DeleteBucket:{http:{method:"DELETE",requestUri:"/{Bucket}"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}}},DeleteBucketCors:{http:{method:"DELETE",requestUri:"/{Bucket}?cors"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}}},DeleteBucketLifecycle:{http:{method:"DELETE",requestUri:"/{Bucket}?lifecycle"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}}},DeleteBucketPolicy:{http:{method:"DELETE",requestUri:"/{Bucket}?policy"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}}},DeleteBucketTagging:{http:{method:"DELETE",requestUri:"/{Bucket}?tagging"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}}},DeleteBucketWebsite:{http:{method:"DELETE",requestUri:"/{Bucket}?website"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}}},DeleteObject:{http:{method:"DELETE",requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","Key"],members:{Bucket:{location:"uri",locationName:"Bucket"},Key:{location:"uri",locationName:"Key"},MFA:{location:"header",locationName:"x-amz-mfa"},VersionId:{location:"querystring",locationName:"versionId"}}},output:{type:"structure",members:{DeleteMarker:{location:"header",locationName:"x-amz-delete-marker",type:"boolean"},VersionId:{location:"header",locationName:"x-amz-version-id"}}}},DeleteObjects:{http:{requestUri:"/{Bucket}?delete"},input:{type:"structure",required:["Bucket","Delete"],members:{Bucket:{location:"uri",locationName:"Bucket"},Delete:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"Delete",type:"structure",required:["Objects"],members:{Objects:{locationName:"Object",type:"list",member:{type:"structure",required:["Key"],members:{Key:{},VersionId:{}}},flattened:!0},Quiet:{type:"boolean"}}},MFA:{location:"header",locationName:"x-amz-mfa"}},payload:"Delete"},output:{type:"structure",members:{Deleted:{type:"list",member:{type:"structure",members:{Key:{},VersionId:{},DeleteMarker:{type:"boolean"},DeleteMarkerVersionId:{}}},flattened:!0},Errors:{locationName:"Error",type:"list",member:{type:"structure",members:{Key:{},VersionId:{},Code:{},Message:{}}},flattened:!0}}},alias:"DeleteMultipleObjects"},GetBucketAcl:{http:{method:"GET",requestUri:"/{Bucket}?acl"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{Owner:{shape:"S2b"},Grants:{shape:"S2e",locationName:"AccessControlList"}}}},GetBucketCors:{http:{method:"GET",requestUri:"/{Bucket}?cors"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{CORSRules:{shape:"S2n",locationName:"CORSRule"}}}},GetBucketLifecycle:{http:{method:"GET",requestUri:"/{Bucket}?lifecycle"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{Rules:{shape:"S30",locationName:"Rule"}}}},GetBucketLocation:{http:{method:"GET",requestUri:"/{Bucket}?location"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{LocationConstraint:{}}}},GetBucketLogging:{http:{method:"GET",requestUri:"/{Bucket}?logging"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{LoggingEnabled:{shape:"S3f"}}}},GetBucketNotification:{http:{method:"GET",requestUri:"/{Bucket}?notification"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{TopicConfiguration:{shape:"S3n"},QueueConfiguration:{shape:"S3s"},CloudFunctionConfiguration:{shape:"S3u"}}}},GetBucketPolicy:{http:{method:"GET",requestUri:"/{Bucket}?policy"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{Policy:{}},payload:"Policy"}},GetBucketRequestPayment:{http:{method:"GET",requestUri:"/{Bucket}?requestPayment"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{Payer:{}}}},GetBucketTagging:{http:{method:"GET",requestUri:"/{Bucket}?tagging"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",required:["TagSet"],members:{TagSet:{shape:"S45"}}}},GetBucketVersioning:{http:{method:"GET",requestUri:"/{Bucket}?versioning"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{Status:{},MFADelete:{locationName:"MfaDelete"}}}},GetBucketWebsite:{http:{method:"GET",requestUri:"/{Bucket}?website"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}},output:{type:"structure",members:{RedirectAllRequestsTo:{shape:"S4e"},IndexDocument:{shape:"S4h"},ErrorDocument:{shape:"S4j"},RoutingRules:{shape:"S4k"}}}},GetObject:{http:{method:"GET",requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","Key"],members:{Bucket:{location:"uri",locationName:"Bucket"},IfMatch:{location:"header",locationName:"If-Match"},IfModifiedSince:{location:"header",locationName:"If-Modified-Since",type:"timestamp"},IfNoneMatch:{location:"header",locationName:"If-None-Match"},IfUnmodifiedSince:{location:"header",locationName:"If-Unmodified-Since",type:"timestamp"},Key:{location:"uri",locationName:"Key"},Range:{location:"header",locationName:"Range"},ResponseCacheControl:{location:"querystring",locationName:"response-cache-control"},ResponseContentDisposition:{location:"querystring",locationName:"response-content-disposition"},ResponseContentEncoding:{location:"querystring",locationName:"response-content-encoding"},ResponseContentLanguage:{location:"querystring",locationName:"response-content-language"},ResponseContentType:{location:"querystring",locationName:"response-content-type"},ResponseExpires:{location:"querystring",locationName:"response-expires",type:"timestamp"},VersionId:{location:"querystring",locationName:"versionId"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKey:{shape:"S15",location:"header",locationName:"x-amz-server-side-encryption-customer-key"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"}}},output:{type:"structure",members:{Body:{streaming:!0,type:"blob"},DeleteMarker:{location:"header",locationName:"x-amz-delete-marker",type:"boolean"},AcceptRanges:{location:"header",locationName:"accept-ranges"},Expiration:{location:"header",locationName:"x-amz-expiration",type:"timestamp"},Restore:{location:"header",locationName:"x-amz-restore"},LastModified:{location:"header",locationName:"Last-Modified",type:"timestamp"},ContentLength:{location:"header",locationName:"Content-Length",type:"integer"},ETag:{location:"header",locationName:"ETag"},MissingMeta:{location:"header",locationName:"x-amz-missing-meta",type:"integer"},VersionId:{location:"header",locationName:"x-amz-version-id"},CacheControl:{location:"header",locationName:"Cache-Control"},ContentDisposition:{location:"header",locationName:"Content-Disposition"},ContentEncoding:{location:"header",locationName:"Content-Encoding"},ContentLanguage:{location:"header",locationName:"Content-Language"},ContentType:{location:"header",locationName:"Content-Type"},Expires:{location:"header",locationName:"Expires",type:"timestamp"},WebsiteRedirectLocation:{location:"header",locationName:"x-amz-website-redirect-location"},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},Metadata:{shape:"Sy",location:"headers",locationName:"x-amz-meta-"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}},payload:"Body"}},GetObjectAcl:{http:{method:"GET",requestUri:"/{Bucket}/{Key+}?acl"},input:{type:"structure",required:["Bucket","Key"],members:{Bucket:{location:"uri",locationName:"Bucket"},Key:{location:"uri",locationName:"Key"},VersionId:{location:"querystring",locationName:"versionId"}}},output:{type:"structure",members:{Owner:{shape:"S2b"},Grants:{shape:"S2e",locationName:"AccessControlList"}}}},GetObjectTorrent:{http:{method:"GET",requestUri:"/{Bucket}/{Key+}?torrent"},input:{type:"structure",required:["Bucket","Key"],members:{Bucket:{location:"uri",locationName:"Bucket"},Key:{location:"uri",locationName:"Key"}}},output:{type:"structure",members:{Body:{streaming:!0,type:"blob"}},payload:"Body"}},HeadBucket:{http:{method:"HEAD",requestUri:"/{Bucket}"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"}}}},HeadObject:{http:{method:"HEAD",requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","Key"],members:{Bucket:{location:"uri",locationName:"Bucket"},IfMatch:{location:"header",locationName:"If-Match"},IfModifiedSince:{location:"header",locationName:"If-Modified-Since",type:"timestamp"},IfNoneMatch:{location:"header",locationName:"If-None-Match"},IfUnmodifiedSince:{location:"header",locationName:"If-Unmodified-Since",type:"timestamp"},Key:{location:"uri",locationName:"Key"},Range:{location:"header",locationName:"Range"},VersionId:{location:"querystring",locationName:"versionId"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKey:{shape:"S15",location:"header",locationName:"x-amz-server-side-encryption-customer-key"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"}}},output:{type:"structure",members:{DeleteMarker:{location:"header",locationName:"x-amz-delete-marker",type:"boolean"},AcceptRanges:{location:"header",locationName:"accept-ranges"},Expiration:{location:"header",locationName:"x-amz-expiration",type:"timestamp"},Restore:{location:"header",locationName:"x-amz-restore"},LastModified:{location:"header",locationName:"Last-Modified",type:"timestamp"},ContentLength:{location:"header",locationName:"Content-Length",type:"integer"},ETag:{location:"header",locationName:"ETag"},MissingMeta:{location:"header",locationName:"x-amz-missing-meta",type:"integer"},VersionId:{location:"header",locationName:"x-amz-version-id"},CacheControl:{location:"header",locationName:"Cache-Control"},ContentDisposition:{location:"header",locationName:"Content-Disposition"},ContentEncoding:{location:"header",locationName:"Content-Encoding"},ContentLanguage:{location:"header",locationName:"Content-Language"},ContentType:{location:"header",locationName:"Content-Type"},Expires:{location:"header",locationName:"Expires",type:"timestamp"},WebsiteRedirectLocation:{location:"header",locationName:"x-amz-website-redirect-location"},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},Metadata:{shape:"Sy",location:"headers",locationName:"x-amz-meta-"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}}}},ListBuckets:{http:{method:"GET"},output:{type:"structure",members:{Buckets:{type:"list",member:{locationName:"Bucket",type:"structure",members:{Name:{},CreationDate:{type:"timestamp"}}}},Owner:{shape:"S2b"}}},alias:"GetService"},ListMultipartUploads:{http:{method:"GET",requestUri:"/{Bucket}?uploads"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"},Delimiter:{location:"querystring",locationName:"delimiter"},EncodingType:{location:"querystring",locationName:"encoding-type"},KeyMarker:{location:"querystring",locationName:"key-marker"},MaxUploads:{location:"querystring",locationName:"max-uploads",type:"integer"},Prefix:{location:"querystring",locationName:"prefix"},UploadIdMarker:{location:"querystring",locationName:"upload-id-marker"}}},output:{type:"structure",members:{Bucket:{},KeyMarker:{},UploadIdMarker:{},NextKeyMarker:{},Prefix:{},Delimiter:{},NextUploadIdMarker:{},MaxUploads:{type:"integer"},IsTruncated:{type:"boolean"},Uploads:{locationName:"Upload",type:"list",member:{type:"structure",members:{UploadId:{},Key:{},Initiated:{type:"timestamp"},StorageClass:{},Owner:{shape:"S2b"},Initiator:{shape:"S5z"}}},flattened:!0},CommonPrefixes:{shape:"S60"},EncodingType:{}}}},ListObjectVersions:{http:{method:"GET",requestUri:"/{Bucket}?versions"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"},Delimiter:{location:"querystring",locationName:"delimiter"},EncodingType:{location:"querystring",locationName:"encoding-type"},KeyMarker:{location:"querystring",locationName:"key-marker"},MaxKeys:{location:"querystring",locationName:"max-keys",type:"integer"},Prefix:{location:"querystring",locationName:"prefix"},VersionIdMarker:{location:"querystring",locationName:"version-id-marker"}}},output:{type:"structure",members:{IsTruncated:{type:"boolean"},KeyMarker:{},VersionIdMarker:{},NextKeyMarker:{},NextVersionIdMarker:{},Versions:{locationName:"Version",type:"list",member:{type:"structure",members:{ETag:{},Size:{type:"integer"},StorageClass:{},Key:{},VersionId:{},IsLatest:{type:"boolean"},LastModified:{type:"timestamp"},Owner:{shape:"S2b"}}},flattened:!0},DeleteMarkers:{locationName:"DeleteMarker",type:"list",member:{type:"structure",members:{Owner:{shape:"S2b"},Key:{},VersionId:{},IsLatest:{type:"boolean"},LastModified:{type:"timestamp"}}},flattened:!0},Name:{},Prefix:{},Delimiter:{},MaxKeys:{type:"integer"},CommonPrefixes:{shape:"S60"},EncodingType:{}}},alias:"GetBucketObjectVersions"},ListObjects:{http:{method:"GET",requestUri:"/{Bucket}"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"},Delimiter:{location:"querystring",locationName:"delimiter"},EncodingType:{location:"querystring",locationName:"encoding-type"},Marker:{location:"querystring",locationName:"marker"},MaxKeys:{location:"querystring",locationName:"max-keys",type:"integer"},Prefix:{location:"querystring",locationName:"prefix"}}},output:{type:"structure",members:{IsTruncated:{type:"boolean"},Marker:{},NextMarker:{},Contents:{type:"list",member:{type:"structure",members:{Key:{},LastModified:{type:"timestamp"},ETag:{},Size:{type:"integer"},StorageClass:{},Owner:{shape:"S2b"}}},flattened:!0},Name:{},Prefix:{},Delimiter:{},MaxKeys:{type:"integer"},CommonPrefixes:{shape:"S60"},EncodingType:{}}},alias:"GetBucket"},ListParts:{http:{method:"GET",requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","Key","UploadId"],members:{Bucket:{location:"uri",locationName:"Bucket"},Key:{location:"uri",locationName:"Key"},MaxParts:{location:"querystring",locationName:"max-parts",type:"integer"},PartNumberMarker:{location:"querystring",locationName:"part-number-marker",type:"integer"},UploadId:{location:"querystring",locationName:"uploadId"}}},output:{type:"structure",members:{Bucket:{},Key:{},UploadId:{},PartNumberMarker:{type:"integer"},NextPartNumberMarker:{type:"integer"},MaxParts:{type:"integer"},IsTruncated:{type:"boolean"},Parts:{locationName:"Part",type:"list",member:{type:"structure",members:{PartNumber:{type:"integer"},LastModified:{type:"timestamp"},ETag:{},Size:{type:"integer"}}},flattened:!0},Initiator:{shape:"S5z"},Owner:{shape:"S2b"},StorageClass:{}}}},PutBucketAcl:{http:{method:"PUT",requestUri:"/{Bucket}?acl"},input:{type:"structure",required:["Bucket"],members:{ACL:{location:"header",locationName:"x-amz-acl"},AccessControlPolicy:{shape:"S6t",xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"AccessControlPolicy"},Bucket:{location:"uri",locationName:"Bucket"},ContentMD5:{location:"header",locationName:"Content-MD5"},GrantFullControl:{location:"header",locationName:"x-amz-grant-full-control"},GrantRead:{location:"header",locationName:"x-amz-grant-read"},GrantReadACP:{location:"header",locationName:"x-amz-grant-read-acp"},GrantWrite:{location:"header",locationName:"x-amz-grant-write"},GrantWriteACP:{location:"header",locationName:"x-amz-grant-write-acp"}},payload:"AccessControlPolicy"}},PutBucketCors:{http:{method:"PUT",requestUri:"/{Bucket}?cors"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"},CORSConfiguration:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"CORSConfiguration",type:"structure",members:{CORSRules:{shape:"S2n",locationName:"CORSRule"}}},ContentMD5:{location:"header",locationName:"Content-MD5"}},payload:"CORSConfiguration"}},PutBucketLifecycle:{http:{method:"PUT",requestUri:"/{Bucket}?lifecycle"},input:{type:"structure",required:["Bucket"],members:{Bucket:{location:"uri",locationName:"Bucket"},ContentMD5:{location:"header",locationName:"Content-MD5"},LifecycleConfiguration:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"LifecycleConfiguration",type:"structure",required:["Rules"],members:{Rules:{shape:"S30",locationName:"Rule"}}}},payload:"LifecycleConfiguration"}},PutBucketLogging:{http:{method:"PUT",requestUri:"/{Bucket}?logging"},input:{type:"structure",required:["Bucket","BucketLoggingStatus"],members:{Bucket:{location:"uri",locationName:"Bucket"},BucketLoggingStatus:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"BucketLoggingStatus",type:"structure",members:{LoggingEnabled:{shape:"S3f"}}},ContentMD5:{location:"header",locationName:"Content-MD5"}},payload:"BucketLoggingStatus"}},PutBucketNotification:{http:{method:"PUT",requestUri:"/{Bucket}?notification"},input:{type:"structure",required:["Bucket","NotificationConfiguration"],members:{Bucket:{location:"uri",locationName:"Bucket"},ContentMD5:{location:"header",locationName:"Content-MD5"},NotificationConfiguration:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"NotificationConfiguration",type:"structure",members:{TopicConfiguration:{shape:"S3n"},QueueConfiguration:{shape:"S3s"},CloudFunctionConfiguration:{shape:"S3u"}}}},payload:"NotificationConfiguration"}},PutBucketPolicy:{http:{method:"PUT",requestUri:"/{Bucket}?policy"},input:{type:"structure",required:["Bucket","Policy"],members:{Bucket:{location:"uri",locationName:"Bucket"},ContentMD5:{location:"header",locationName:"Content-MD5"},Policy:{}},payload:"Policy"}},PutBucketRequestPayment:{http:{method:"PUT",requestUri:"/{Bucket}?requestPayment"},input:{type:"structure",required:["Bucket","RequestPaymentConfiguration"],members:{Bucket:{location:"uri",locationName:"Bucket"},ContentMD5:{location:"header",locationName:"Content-MD5"},RequestPaymentConfiguration:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"RequestPaymentConfiguration",type:"structure",required:["Payer"],members:{Payer:{}}}},payload:"RequestPaymentConfiguration"}},PutBucketTagging:{http:{method:"PUT",requestUri:"/{Bucket}?tagging"},input:{type:"structure",required:["Bucket","Tagging"],members:{Bucket:{location:"uri",locationName:"Bucket"},ContentMD5:{location:"header",locationName:"Content-MD5"},Tagging:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"Tagging",type:"structure",required:["TagSet"],members:{TagSet:{shape:"S45"}}}},payload:"Tagging"}},PutBucketVersioning:{http:{method:"PUT",requestUri:"/{Bucket}?versioning"},input:{type:"structure",required:["Bucket","VersioningConfiguration"],members:{Bucket:{location:"uri",locationName:"Bucket"},ContentMD5:{location:"header",locationName:"Content-MD5"},MFA:{location:"header",locationName:"x-amz-mfa"},VersioningConfiguration:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"VersioningConfiguration",type:"structure",members:{MFADelete:{locationName:"MfaDelete"},Status:{}}}},payload:"VersioningConfiguration"}},PutBucketWebsite:{http:{method:"PUT",requestUri:"/{Bucket}?website"},input:{type:"structure",required:["Bucket","WebsiteConfiguration"],members:{Bucket:{location:"uri",locationName:"Bucket"},ContentMD5:{location:"header",locationName:"Content-MD5"},WebsiteConfiguration:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"WebsiteConfiguration",type:"structure",members:{ErrorDocument:{shape:"S4j"},IndexDocument:{shape:"S4h"},RedirectAllRequestsTo:{shape:"S4e"},RoutingRules:{shape:"S4k"}}}},payload:"WebsiteConfiguration"}},PutObject:{http:{method:"PUT",requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","Key"],members:{ACL:{location:"header",locationName:"x-amz-acl"},Body:{streaming:!0,type:"blob"},Bucket:{location:"uri",locationName:"Bucket"},CacheControl:{location:"header",locationName:"Cache-Control"},ContentDisposition:{location:"header",locationName:"Content-Disposition"},ContentEncoding:{location:"header",locationName:"Content-Encoding"},ContentLanguage:{location:"header",locationName:"Content-Language"},ContentLength:{location:"header",locationName:"Content-Length",type:"integer"},ContentMD5:{location:"header",locationName:"Content-MD5"},ContentType:{location:"header",locationName:"Content-Type"},Expires:{location:"header",locationName:"Expires",type:"timestamp"},GrantFullControl:{location:"header",locationName:"x-amz-grant-full-control"},GrantRead:{location:"header",locationName:"x-amz-grant-read"},GrantReadACP:{location:"header",locationName:"x-amz-grant-read-acp"},GrantWriteACP:{location:"header",locationName:"x-amz-grant-write-acp"},Key:{location:"uri",locationName:"Key"},Metadata:{shape:"Sy",location:"headers",locationName:"x-amz-meta-"},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},StorageClass:{location:"header",locationName:"x-amz-storage-class"},WebsiteRedirectLocation:{location:"header",locationName:"x-amz-website-redirect-location"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKey:{shape:"S15",location:"header",locationName:"x-amz-server-side-encryption-customer-key"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}},payload:"Body"},output:{type:"structure",members:{Expiration:{location:"header",locationName:"x-amz-expiration",type:"timestamp"},ETag:{location:"header",locationName:"ETag"},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},VersionId:{location:"header",locationName:"x-amz-version-id"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}}}},PutObjectAcl:{http:{method:"PUT",requestUri:"/{Bucket}/{Key+}?acl"},input:{type:"structure",required:["Bucket","Key"],members:{ACL:{location:"header",locationName:"x-amz-acl"},AccessControlPolicy:{shape:"S6t",xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"AccessControlPolicy"},Bucket:{location:"uri",locationName:"Bucket"},ContentMD5:{location:"header",locationName:"Content-MD5"},GrantFullControl:{location:"header",locationName:"x-amz-grant-full-control"},GrantRead:{location:"header",locationName:"x-amz-grant-read"},GrantReadACP:{location:"header",locationName:"x-amz-grant-read-acp"},GrantWrite:{location:"header",locationName:"x-amz-grant-write"},GrantWriteACP:{location:"header",locationName:"x-amz-grant-write-acp"},Key:{location:"uri",locationName:"Key"}},payload:"AccessControlPolicy"}},RestoreObject:{http:{requestUri:"/{Bucket}/{Key+}?restore"},input:{type:"structure",required:["Bucket","Key"],members:{Bucket:{location:"uri",locationName:"Bucket"},Key:{location:"uri",locationName:"Key"},VersionId:{location:"querystring",locationName:"versionId"},RestoreRequest:{xmlNamespace:{uri:"http://s3.amazonaws.com/doc/2006-03-01/"},locationName:"RestoreRequest",type:"structure",required:["Days"],members:{Days:{type:"integer"}}}},payload:"RestoreRequest"},alias:"PostObjectRestore"},UploadPart:{http:{method:"PUT",requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","Key","PartNumber","UploadId"],members:{Body:{streaming:!0,type:"blob"},Bucket:{location:"uri",locationName:"Bucket"},ContentLength:{location:"header",locationName:"Content-Length",type:"integer"},ContentMD5:{location:"header",locationName:"Content-MD5"},Key:{location:"uri",locationName:"Key"},PartNumber:{location:"querystring",locationName:"partNumber",type:"integer"},UploadId:{location:"querystring",locationName:"uploadId"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKey:{shape:"S15",location:"header",locationName:"x-amz-server-side-encryption-customer-key"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"}},payload:"Body"},output:{type:"structure",members:{ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},ETag:{location:"header",locationName:"ETag"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}}}},UploadPartCopy:{http:{method:"PUT",requestUri:"/{Bucket}/{Key+}"},input:{type:"structure",required:["Bucket","CopySource","Key","PartNumber","UploadId"],members:{Bucket:{location:"uri",locationName:"Bucket"},CopySource:{location:"header",locationName:"x-amz-copy-source"},CopySourceIfMatch:{location:"header",locationName:"x-amz-copy-source-if-match"},CopySourceIfModifiedSince:{location:"header",locationName:"x-amz-copy-source-if-modified-since",type:"timestamp"},CopySourceIfNoneMatch:{location:"header",locationName:"x-amz-copy-source-if-none-match"},CopySourceIfUnmodifiedSince:{location:"header",locationName:"x-amz-copy-source-if-unmodified-since",type:"timestamp"},CopySourceRange:{location:"header",locationName:"x-amz-copy-source-range"},Key:{location:"uri",locationName:"Key"},PartNumber:{location:"querystring",locationName:"partNumber",type:"integer"},UploadId:{location:"querystring",locationName:"uploadId"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKey:{shape:"S15",location:"header",locationName:"x-amz-server-side-encryption-customer-key"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},CopySourceSSECustomerAlgorithm:{location:"header",locationName:"x-amz-copy-source-server-side-encryption-customer-algorithm"},CopySourceSSECustomerKey:{shape:"S18",location:"header",locationName:"x-amz-copy-source-server-side-encryption-customer-key"},CopySourceSSECustomerKeyMD5:{location:"header",locationName:"x-amz-copy-source-server-side-encryption-customer-key-MD5"}}},output:{type:"structure",members:{CopySourceVersionId:{location:"header",locationName:"x-amz-copy-source-version-id"},CopyPartResult:{type:"structure",members:{ETag:{},LastModified:{type:"timestamp"}}},ServerSideEncryption:{location:"header",locationName:"x-amz-server-side-encryption"},SSECustomerAlgorithm:{location:"header",locationName:"x-amz-server-side-encryption-customer-algorithm"},SSECustomerKeyMD5:{location:"header",locationName:"x-amz-server-side-encryption-customer-key-MD5"},SSEKMSKeyId:{shape:"Sg",location:"header",locationName:"x-amz-server-side-encryption-aws-kms-key-id"}},payload:"CopyPartResult"}}},shapes:{Sg:{type:"string",sensitive:!0},Sy:{type:"map",key:{},value:{}},S15:{type:"string",sensitive:!0},S18:{type:"string",sensitive:!0},S2b:{type:"structure",members:{DisplayName:{},ID:{}}},S2e:{type:"list",member:{locationName:"Grant",type:"structure",members:{Grantee:{shape:"S2g"},Permission:{}}}},S2g:{type:"structure",required:["Type"],members:{DisplayName:{},EmailAddress:{},ID:{},Type:{type:"string",xmlAttribute:!0,locationName:"xsi:type"},URI:{}},xmlNamespace:{prefix:"xsi",uri:"http://www.w3.org/2001/XMLSchema-instance"}},S2n:{type:"list",member:{type:"structure",members:{AllowedHeaders:{locationName:"AllowedHeader",type:"list",member:{},flattened:!0},AllowedMethods:{locationName:"AllowedMethod",type:"list",member:{},flattened:!0},AllowedOrigins:{locationName:"AllowedOrigin",type:"list",member:{},flattened:!0},ExposeHeaders:{locationName:"ExposeHeader",type:"list",member:{},flattened:!0},MaxAgeSeconds:{type:"integer"}}},flattened:!0},S30:{type:"list",member:{type:"structure",required:["Prefix","Status"],members:{Expiration:{type:"structure",members:{Date:{shape:"S33"},Days:{type:"integer"}}},ID:{},Prefix:{},Status:{},Transition:{type:"structure",members:{Date:{shape:"S33"},Days:{type:"integer"},StorageClass:{}}},NoncurrentVersionTransition:{type:"structure",members:{NoncurrentDays:{type:"integer"},StorageClass:{}}},NoncurrentVersionExpiration:{type:"structure",members:{NoncurrentDays:{type:"integer"}}}}},flattened:!0},S33:{type:"timestamp",timestampFormat:"iso8601"},S3f:{type:"structure",members:{TargetBucket:{},TargetGrants:{type:"list",member:{locationName:"Grant",type:"structure",members:{Grantee:{shape:"S2g"},Permission:{}}}},TargetPrefix:{}}},S3n:{type:"structure",members:{Id:{},Events:{shape:"S3p",locationName:"Event"},Event:{deprecated:!0},Topic:{}}},S3p:{type:"list",member:{},flattened:!0},S3s:{type:"structure",members:{Id:{},Event:{deprecated:!0},Events:{shape:"S3p",locationName:"Event"},Queue:{}}},S3u:{type:"structure",members:{Id:{},Event:{deprecated:!0},Events:{shape:"S3p",locationName:"Event"},CloudFunction:{},InvocationRole:{}}},S45:{type:"list",member:{locationName:"Tag",type:"structure",required:["Key","Value"],members:{Key:{},Value:{}}}},S4e:{type:"structure",required:["HostName"],members:{HostName:{},Protocol:{}}},S4h:{type:"structure",required:["Suffix"],members:{Suffix:{}}},S4j:{type:"structure",required:["Key"],members:{Key:{}}},S4k:{type:"list",member:{locationName:"RoutingRule",type:"structure",required:["Redirect"],members:{Condition:{type:"structure",members:{HttpErrorCodeReturnedEquals:{},KeyPrefixEquals:{}}},Redirect:{type:"structure",members:{HostName:{},HttpRedirectCode:{},Protocol:{},ReplaceKeyPrefixWith:{},ReplaceKeyWith:{}}}}}},S5z:{type:"structure",members:{ID:{},DisplayName:{}}},S60:{type:"list",member:{type:"structure",members:{Prefix:{}}},flattened:!0},S6t:{type:"structure",members:{Grants:{shape:"S2e",locationName:"AccessControlList"},Owner:{shape:"S2b"}}}},paginators:{ListBuckets:{result_key:"Buckets"},ListMultipartUploads:{limit_key:"MaxUploads",more_results:"IsTruncated",output_token:["NextKeyMarker","NextUploadIdMarker"],input_token:["KeyMarker","UploadIdMarker"],result_key:["Uploads","CommonPrefixes"]},ListObjectVersions:{more_results:"IsTruncated",limit_key:"MaxKeys",output_token:["NextKeyMarker","NextVersionIdMarker"],input_token:["KeyMarker","VersionIdMarker"],result_key:["Versions","DeleteMarkers","CommonPrefixes"]},ListObjects:{more_results:"IsTruncated",limit_key:"MaxKeys",output_token:"NextMarker || Contents[-1].Key",input_token:"Marker",result_key:["Contents","CommonPrefixes"]},ListParts:{more_results:"IsTruncated",limit_key:"MaxParts",output_token:"NextPartNumberMarker",input_token:"PartNumberMarker",result_key:"Parts"}},waiters:{__default__:{interval:5,max_attempts:20},BucketExists:{operation:"HeadBucket",ignore_errors:[404],success_type:"output"},BucketNotExists:{operation:"HeadBucket",success_type:"error",success_value:404},ObjectExists:{operation:"HeadObject",ignore_errors:[404],success_type:"output"},ObjectNotExists:{operation:"HeadObject",success_type:"error",success_value:404}}},r.apiLoader.services.sns={},r.SNS=r.Service.defineService("sns",["2010-03-31"]),r.apiLoader.services.sns["2010-03-31"]={metadata:{apiVersion:"2010-03-31",endpointPrefix:"sns",serviceAbbreviation:"Amazon SNS",serviceFullName:"Amazon Simple Notification Service",signatureVersion:"v4",xmlNamespace:"http://sns.amazonaws.com/doc/2010-03-31/",protocol:"query"},operations:{AddPermission:{input:{type:"structure",required:["TopicArn","Label","AWSAccountId","ActionName"],members:{TopicArn:{},Label:{},AWSAccountId:{type:"list",member:{}},ActionName:{type:"list",member:{}}}},http:{}},ConfirmSubscription:{input:{type:"structure",required:["TopicArn","Token"],members:{TopicArn:{},Token:{},AuthenticateOnUnsubscribe:{}}},output:{resultWrapper:"ConfirmSubscriptionResult",type:"structure",members:{SubscriptionArn:{}}},http:{}},CreatePlatformApplication:{input:{type:"structure",required:["Name","Platform","Attributes"],members:{Name:{},Platform:{},Attributes:{shape:"Sf"}}},output:{resultWrapper:"CreatePlatformApplicationResult",type:"structure",members:{PlatformApplicationArn:{}}},http:{}},CreatePlatformEndpoint:{input:{type:"structure",required:["PlatformApplicationArn","Token"],members:{PlatformApplicationArn:{},Token:{},CustomUserData:{},Attributes:{shape:"Sf"}}},output:{resultWrapper:"CreatePlatformEndpointResult",type:"structure",members:{EndpointArn:{}}},http:{}},CreateTopic:{input:{type:"structure",required:["Name"],members:{Name:{}}},output:{resultWrapper:"CreateTopicResult",type:"structure",members:{TopicArn:{}}},http:{}},DeleteEndpoint:{input:{type:"structure",required:["EndpointArn"],members:{EndpointArn:{}}},http:{}},DeletePlatformApplication:{input:{type:"structure",required:["PlatformApplicationArn"],members:{PlatformApplicationArn:{}}},http:{}},DeleteTopic:{input:{type:"structure",required:["TopicArn"],members:{TopicArn:{}}},http:{}},GetEndpointAttributes:{input:{type:"structure",required:["EndpointArn"],members:{EndpointArn:{}}},output:{resultWrapper:"GetEndpointAttributesResult",type:"structure",members:{Attributes:{shape:"Sf"}}},http:{}},GetPlatformApplicationAttributes:{input:{type:"structure",required:["PlatformApplicationArn"],members:{PlatformApplicationArn:{}}},output:{resultWrapper:"GetPlatformApplicationAttributesResult",type:"structure",members:{Attributes:{shape:"Sf"}}},http:{}},GetSubscriptionAttributes:{input:{type:"structure",required:["SubscriptionArn"],members:{SubscriptionArn:{}}},output:{resultWrapper:"GetSubscriptionAttributesResult",type:"structure",members:{Attributes:{type:"map",key:{},value:{}}}},http:{}},GetTopicAttributes:{input:{type:"structure",required:["TopicArn"],members:{TopicArn:{}}},output:{resultWrapper:"GetTopicAttributesResult",type:"structure",members:{Attributes:{type:"map",key:{},value:{}}}},http:{}},ListEndpointsByPlatformApplication:{input:{type:"structure",required:["PlatformApplicationArn"],members:{PlatformApplicationArn:{},NextToken:{}}},output:{resultWrapper:"ListEndpointsByPlatformApplicationResult",type:"structure",members:{Endpoints:{type:"list",member:{type:"structure",members:{EndpointArn:{},Attributes:{shape:"Sf"}}}},NextToken:{}}},http:{}},ListPlatformApplications:{input:{type:"structure",members:{NextToken:{}}},output:{resultWrapper:"ListPlatformApplicationsResult",type:"structure",members:{PlatformApplications:{type:"list",member:{type:"structure",members:{PlatformApplicationArn:{},Attributes:{shape:"Sf"}}}},NextToken:{}}},http:{}},ListSubscriptions:{input:{type:"structure",members:{NextToken:{}}},output:{resultWrapper:"ListSubscriptionsResult",type:"structure",members:{Subscriptions:{shape:"S1c"},NextToken:{}}},http:{}},ListSubscriptionsByTopic:{input:{type:"structure",required:["TopicArn"],members:{TopicArn:{},NextToken:{}}},output:{resultWrapper:"ListSubscriptionsByTopicResult",type:"structure",members:{Subscriptions:{shape:"S1c"},NextToken:{}}},http:{}},ListTopics:{input:{type:"structure",members:{NextToken:{}}},output:{resultWrapper:"ListTopicsResult",type:"structure",members:{Topics:{type:"list",member:{type:"structure",members:{TopicArn:{}}}},NextToken:{}}},http:{}},Publish:{input:{type:"structure",required:["Message"],members:{TopicArn:{},TargetArn:{},Message:{},Subject:{},MessageStructure:{},MessageAttributes:{type:"map",key:{locationName:"Name"},value:{locationName:"Value",type:"structure",required:["DataType"],members:{DataType:{},StringValue:{},BinaryValue:{type:"blob"}}}}}},output:{resultWrapper:"PublishResult",type:"structure",members:{MessageId:{}}},http:{}},RemovePermission:{input:{type:"structure",required:["TopicArn","Label"],members:{TopicArn:{},Label:{}}},http:{}},SetEndpointAttributes:{input:{type:"structure",required:["EndpointArn","Attributes"],members:{EndpointArn:{},Attributes:{shape:"Sf"}}},http:{}},SetPlatformApplicationAttributes:{input:{type:"structure",required:["PlatformApplicationArn","Attributes"],members:{PlatformApplicationArn:{},Attributes:{shape:"Sf"}}},http:{}},SetSubscriptionAttributes:{input:{type:"structure",required:["SubscriptionArn","AttributeName"],members:{SubscriptionArn:{},AttributeName:{},AttributeValue:{}}},http:{}},SetTopicAttributes:{input:{type:"structure",required:["TopicArn","AttributeName"],members:{TopicArn:{},AttributeName:{},AttributeValue:{}}},http:{}},Subscribe:{input:{type:"structure",required:["TopicArn","Protocol"],members:{TopicArn:{},Protocol:{},Endpoint:{}}},output:{resultWrapper:"SubscribeResult",type:"structure",members:{SubscriptionArn:{}}},http:{}},Unsubscribe:{input:{type:"structure",required:["SubscriptionArn"],members:{SubscriptionArn:{}}},http:{}}},shapes:{Sf:{type:"map",key:{},value:{}},S1c:{type:"list",member:{type:"structure",members:{SubscriptionArn:{},Owner:{},Protocol:{},Endpoint:{},TopicArn:{}}}}},paginators:{ListEndpointsByPlatformApplication:{input_token:"NextToken",output_token:"NextToken",result_key:"Endpoints"},ListPlatformApplications:{input_token:"NextToken",output_token:"NextToken",result_key:"PlatformApplications"},ListSubscriptions:{input_token:"NextToken",output_token:"NextToken",result_key:"Subscriptions"},ListSubscriptionsByTopic:{input_token:"NextToken",output_token:"NextToken",result_key:"Subscriptions"},ListTopics:{input_token:"NextToken",output_token:"NextToken",result_key:"Topics"}}},r.apiLoader.services.sqs={},r.SQS=r.Service.defineService("sqs",["2012-11-05"]),e("./services/sqs"),r.apiLoader.services.sqs["2012-11-05"]={metadata:{apiVersion:"2012-11-05",endpointPrefix:"sqs",serviceAbbreviation:"Amazon SQS",serviceFullName:"Amazon Simple Queue Service",signatureVersion:"v4",xmlNamespace:"http://queue.amazonaws.com/doc/2012-11-05/",protocol:"query"},operations:{AddPermission:{input:{type:"structure",required:["QueueUrl","Label","AWSAccountIds","Actions"],members:{QueueUrl:{},Label:{},AWSAccountIds:{type:"list",member:{locationName:"AWSAccountId"},flattened:!0},Actions:{type:"list",member:{locationName:"ActionName"},flattened:!0}}},http:{}},ChangeMessageVisibility:{input:{type:"structure",required:["QueueUrl","ReceiptHandle","VisibilityTimeout"],members:{QueueUrl:{},ReceiptHandle:{},VisibilityTimeout:{type:"integer"}}},http:{}},ChangeMessageVisibilityBatch:{input:{type:"structure",required:["QueueUrl","Entries"],members:{QueueUrl:{},Entries:{type:"list",member:{locationName:"ChangeMessageVisibilityBatchRequestEntry",type:"structure",required:["Id","ReceiptHandle"],members:{Id:{},ReceiptHandle:{},VisibilityTimeout:{type:"integer"}}},flattened:!0}}},output:{resultWrapper:"ChangeMessageVisibilityBatchResult",type:"structure",required:["Successful","Failed"],members:{Successful:{type:"list",member:{locationName:"ChangeMessageVisibilityBatchResultEntry",type:"structure",required:["Id"],members:{Id:{}}},flattened:!0},Failed:{shape:"Sd"}}},http:{}},CreateQueue:{input:{type:"structure",required:["QueueName"],members:{QueueName:{},Attributes:{shape:"Sh",locationName:"Attribute"}}},output:{resultWrapper:"CreateQueueResult",type:"structure",members:{QueueUrl:{}}},http:{}},DeleteMessage:{input:{type:"structure",required:["QueueUrl","ReceiptHandle"],members:{QueueUrl:{},ReceiptHandle:{}}},http:{}},DeleteMessageBatch:{input:{type:"structure",required:["QueueUrl","Entries"],members:{QueueUrl:{},Entries:{type:"list",member:{locationName:"DeleteMessageBatchRequestEntry",type:"structure",required:["Id","ReceiptHandle"],members:{Id:{},ReceiptHandle:{}}},flattened:!0}}},output:{resultWrapper:"DeleteMessageBatchResult",type:"structure",required:["Successful","Failed"],members:{Successful:{type:"list",member:{locationName:"DeleteMessageBatchResultEntry",type:"structure",required:["Id"],members:{Id:{}}},flattened:!0},Failed:{shape:"Sd"}}},http:{}},DeleteQueue:{input:{type:"structure",required:["QueueUrl"],members:{QueueUrl:{}}},http:{}},GetQueueAttributes:{input:{type:"structure",required:["QueueUrl"],members:{QueueUrl:{},AttributeNames:{shape:"St"}}},output:{resultWrapper:"GetQueueAttributesResult",type:"structure",members:{Attributes:{shape:"Sh",locationName:"Attribute"}}},http:{}},GetQueueUrl:{input:{type:"structure",required:["QueueName"],members:{QueueName:{},QueueOwnerAWSAccountId:{}}},output:{resultWrapper:"GetQueueUrlResult",type:"structure",members:{QueueUrl:{}}},http:{}},ListDeadLetterSourceQueues:{input:{type:"structure",required:["QueueUrl"],members:{QueueUrl:{}}},output:{resultWrapper:"ListDeadLetterSourceQueuesResult",type:"structure",required:["queueUrls"],members:{queueUrls:{shape:"Sz"}}},http:{}},ListQueues:{input:{type:"structure",members:{QueueNamePrefix:{}}},output:{resultWrapper:"ListQueuesResult",type:"structure",members:{QueueUrls:{shape:"Sz"}}},http:{}},PurgeQueue:{input:{type:"structure",required:["QueueUrl"],members:{QueueUrl:{}}},http:{}},ReceiveMessage:{input:{type:"structure",required:["QueueUrl"],members:{QueueUrl:{},AttributeNames:{shape:"St"},MessageAttributeNames:{type:"list",member:{locationName:"MessageAttributeName"},flattened:!0},MaxNumberOfMessages:{type:"integer"},VisibilityTimeout:{type:"integer"},WaitTimeSeconds:{type:"integer"}}},output:{resultWrapper:"ReceiveMessageResult",type:"structure",members:{Messages:{type:"list",member:{locationName:"Message",type:"structure",members:{MessageId:{},ReceiptHandle:{},MD5OfBody:{},Body:{},Attributes:{shape:"Sh",locationName:"Attribute"},MD5OfMessageAttributes:{},MessageAttributes:{shape:"S19",locationName:"MessageAttribute"}}},flattened:!0}}},http:{}},RemovePermission:{input:{type:"structure",required:["QueueUrl","Label"],members:{QueueUrl:{},Label:{}}},http:{}},SendMessage:{input:{type:"structure",required:["QueueUrl","MessageBody"],members:{QueueUrl:{},MessageBody:{},DelaySeconds:{type:"integer"},MessageAttributes:{shape:"S19",locationName:"MessageAttribute"}}},output:{resultWrapper:"SendMessageResult",type:"structure",members:{MD5OfMessageBody:{},MD5OfMessageAttributes:{},MessageId:{}}},http:{}},SendMessageBatch:{input:{type:"structure",required:["QueueUrl","Entries"],members:{QueueUrl:{},Entries:{type:"list",member:{locationName:"SendMessageBatchRequestEntry",type:"structure",required:["Id","MessageBody"],members:{Id:{},MessageBody:{},DelaySeconds:{type:"integer"},MessageAttributes:{shape:"S19",locationName:"MessageAttribute"}}},flattened:!0}}},output:{resultWrapper:"SendMessageBatchResult",type:"structure",required:["Successful","Failed"],members:{Successful:{type:"list",member:{locationName:"SendMessageBatchResultEntry",type:"structure",required:["Id","MessageId","MD5OfMessageBody"],members:{Id:{},MessageId:{},MD5OfMessageBody:{},MD5OfMessageAttributes:{}}},flattened:!0},Failed:{shape:"Sd"}}},http:{}},SetQueueAttributes:{input:{type:"structure",required:["QueueUrl","Attributes"],members:{QueueUrl:{},Attributes:{shape:"Sh",locationName:"Attribute"}}},http:{}}},shapes:{Sd:{type:"list",member:{locationName:"BatchResultErrorEntry",type:"structure",required:["Id","SenderFault","Code"],members:{Id:{},SenderFault:{type:"boolean"},Code:{},Message:{}}},flattened:!0},Sh:{type:"map",key:{locationName:"Name"},value:{locationName:"Value"},flattened:!0,locationName:"Attribute"},St:{type:"list",member:{locationName:"AttributeName"},flattened:!0},Sz:{type:"list",member:{locationName:"QueueUrl"},flattened:!0},S19:{type:"map",key:{locationName:"Name"},value:{locationName:"Value",type:"structure",required:["DataType"],members:{StringValue:{},BinaryValue:{type:"blob"},StringListValues:{flattened:!0,locationName:"StringListValue",type:"list",member:{locationName:"StringListValue"}},BinaryListValues:{flattened:!0,locationName:"BinaryListValue",type:"list",member:{locationName:"BinaryListValue",type:"blob"}},DataType:{}}},flattened:!0}},paginators:{ListQueues:{result_key:"QueueUrls"}}},r.apiLoader.services.sts={},r.STS=r.Service.defineService("sts",["2011-06-15"]),e("./services/sts"),r.apiLoader.services.sts["2011-06-15"]={version:"2.0",metadata:{apiVersion:"2011-06-15",endpointPrefix:"sts",globalEndpoint:"sts.amazonaws.com",serviceAbbreviation:"AWS STS",serviceFullName:"AWS Security Token Service",signatureVersion:"v4",xmlNamespace:"https://sts.amazonaws.com/doc/2011-06-15/",protocol:"query"},operations:{AssumeRole:{input:{type:"structure",required:["RoleArn","RoleSessionName"],members:{RoleArn:{},RoleSessionName:{},Policy:{},DurationSeconds:{type:"integer"},ExternalId:{},SerialNumber:{},TokenCode:{}}},output:{resultWrapper:"AssumeRoleResult",type:"structure",members:{Credentials:{shape:"Sa"},AssumedRoleUser:{shape:"Sf"},PackedPolicySize:{type:"integer"}}},http:{}},AssumeRoleWithSAML:{input:{type:"structure",required:["RoleArn","PrincipalArn","SAMLAssertion"],members:{RoleArn:{},PrincipalArn:{},SAMLAssertion:{},Policy:{},DurationSeconds:{type:"integer"}}},output:{resultWrapper:"AssumeRoleWithSAMLResult",type:"structure",members:{Credentials:{shape:"Sa"},AssumedRoleUser:{shape:"Sf"},PackedPolicySize:{type:"integer"},Subject:{},SubjectType:{},Issuer:{},Audience:{},NameQualifier:{}}},http:{}},AssumeRoleWithWebIdentity:{input:{type:"structure",required:["RoleArn","RoleSessionName","WebIdentityToken"],members:{RoleArn:{},RoleSessionName:{},WebIdentityToken:{},ProviderId:{},Policy:{},DurationSeconds:{type:"integer"}}},output:{resultWrapper:"AssumeRoleWithWebIdentityResult",type:"structure",members:{Credentials:{shape:"Sa"},SubjectFromWebIdentityToken:{},AssumedRoleUser:{shape:"Sf"},PackedPolicySize:{type:"integer"},Provider:{},Audience:{}}},http:{}},DecodeAuthorizationMessage:{input:{type:"structure",required:["EncodedMessage"],members:{EncodedMessage:{}}},output:{resultWrapper:"DecodeAuthorizationMessageResult",type:"structure",members:{DecodedMessage:{}}},http:{}},GetFederationToken:{input:{type:"structure",required:["Name"],members:{Name:{},Policy:{},DurationSeconds:{type:"integer"}}},output:{resultWrapper:"GetFederationTokenResult",type:"structure",members:{Credentials:{shape:"Sa"},FederatedUser:{type:"structure",required:["FederatedUserId","Arn"],members:{FederatedUserId:{},Arn:{}}},PackedPolicySize:{type:"integer"}}},http:{}},GetSessionToken:{input:{type:"structure",members:{DurationSeconds:{type:"integer"},SerialNumber:{},TokenCode:{}}},output:{resultWrapper:"GetSessionTokenResult",type:"structure",members:{Credentials:{shape:"Sa"}}},http:{}}},shapes:{Sa:{type:"structure",required:["AccessKeyId","SecretAccessKey","SessionToken","Expiration"],members:{AccessKeyId:{},SecretAccessKey:{},SessionToken:{},Expiration:{type:"timestamp"}}},Sf:{type:"structure",required:["AssumedRoleId","Arn"],members:{AssumedRoleId:{},Arn:{}}}}}
},{"./core":3,"./http/xhr":12,"./services/cognitoidentity":36,"./services/dynamodb":37,"./services/s3":38,"./services/sqs":39,"./services/sts":40,"./xml/browser_parser":50}],2:[function(e){var t=e("./core");e("./credentials"),e("./credentials/credential_provider_chain"),t.Config=t.util.inherit({constructor:function(e){void 0===e&&(e={}),e=this.extractCredentials(e),t.util.each.call(this,this.keys,function(t,r){this.set(t,e[t],r)})},getCredentials:function(e){function r(t){e(t,t?null:a.credentials)}function n(e,r){return new t.util.error(r||new Error,{code:"CredentialsError",message:e})}function i(){a.credentials.get(function(e){if(e){var t="Could not load credentials from "+a.credentials.constructor.name;e=n(t,e)}r(e)})}function o(){var e=null;a.credentials.accessKeyId&&a.credentials.secretAccessKey||(e=n("Missing credentials")),r(e)}var a=this;a.credentials?"function"==typeof a.credentials.get?i():o():a.credentialProvider?a.credentialProvider.resolve(function(e,t){e&&(e=n("Could not load credentials from any providers",e)),a.credentials=t,r(e)}):r(n("No credentials to load"))},update:function(e,r){r=r||!1,e=this.extractCredentials(e),t.util.each.call(this,e,function(e,n){(r||this.keys.hasOwnProperty(e)||t.Service.hasService(e))&&this.set(e,n)})},loadFromPath:function(e){this.clear();var r=JSON.parse(t.util.readFileSync(e)),n=new t.FileSystemCredentials(e),i=new t.CredentialProviderChain;return i.providers.unshift(n),i.resolve(function(e,t){if(e)throw e;r.credentials=t}),this.constructor(r),this},clear:function(){t.util.each.call(this,this.keys,function(e){delete this[e]}),this.set("credentials",void 0),this.set("credentialProvider",void 0)},set:function(e,r,n){void 0===r?(void 0===n&&(n=this.keys[e]),this[e]="function"==typeof n?n.call(this):n):this[e]="httpOptions"===e&&this[e]?t.util.merge(this[e],r):r},keys:{credentials:null,credentialProvider:null,region:null,logger:null,apiVersions:{},apiVersion:null,endpoint:void 0,httpOptions:{timeout:12e4},maxRetries:void 0,maxRedirects:10,paramValidation:!0,sslEnabled:!0,s3ForcePathStyle:!1,s3BucketEndpoint:!1,computeChecksums:!0,convertResponseTypes:!0,dynamoDbCrc32:!0,systemClockOffset:0,signatureVersion:null},extractCredentials:function(e){return e.accessKeyId&&e.secretAccessKey&&(e=t.util.copy(e),e.credentials=new t.Credentials(e)),e}}),t.config=new t.Config},{"./core":3,"./credentials":4,"./credentials/credential_provider_chain":6}],3:[function(e,t){var r={util:e("./util")},n={};n.toString(),t.exports=r,r.util.update(r,{VERSION:"2.1.12",Signers:{},Protocol:{Json:e("./protocol/json"),Query:e("./protocol/query"),Rest:e("./protocol/rest"),RestJson:e("./protocol/rest_json"),RestXml:e("./protocol/rest_xml")},XML:{Builder:e("./xml/builder"),Parser:null},JSON:{Builder:e("./json/builder"),Parser:e("./json/parser")},Model:{Api:e("./model/api"),Operation:e("./model/operation"),Shape:e("./model/shape"),Paginator:e("./model/paginator"),ResourceWaiter:e("./model/resource_waiter")},util:e("./util"),apiLoader:function(){throw new Error("No API loader set")}}),e("./service"),e("./credentials"),e("./credentials/credential_provider_chain"),e("./credentials/temporary_credentials"),e("./credentials/web_identity_credentials"),e("./credentials/cognito_identity_credentials"),e("./credentials/saml_credentials"),e("./config"),e("./http"),e("./sequential_executor"),e("./event_listeners"),e("./request"),e("./response"),e("./resource_waiter"),e("./signers/request_signer"),e("./param_validator"),r.events=new r.SequentialExecutor},{"./config":2,"./credentials":4,"./credentials/cognito_identity_credentials":5,"./credentials/credential_provider_chain":6,"./credentials/saml_credentials":7,"./credentials/temporary_credentials":8,"./credentials/web_identity_credentials":9,"./event_listeners":10,"./http":11,"./json/builder":13,"./json/parser":14,"./model/api":15,"./model/operation":17,"./model/paginator":18,"./model/resource_waiter":19,"./model/shape":20,"./param_validator":21,"./protocol/json":22,"./protocol/query":23,"./protocol/rest":24,"./protocol/rest_json":25,"./protocol/rest_xml":26,"./request":30,"./resource_waiter":31,"./response":32,"./sequential_executor":34,"./service":35,"./signers/request_signer":42,"./util":49,"./xml/builder":51}],4:[function(e){var t=e("./core");t.Credentials=t.util.inherit({constructor:function(){if(t.util.hideProperties(this,["secretAccessKey"]),this.expired=!1,this.expireTime=null,1===arguments.length&&"object"==typeof arguments[0]){var e=arguments[0].credentials||arguments[0];this.accessKeyId=e.accessKeyId,this.secretAccessKey=e.secretAccessKey,this.sessionToken=e.sessionToken}else this.accessKeyId=arguments[0],this.secretAccessKey=arguments[1],this.sessionToken=arguments[2]},expiryWindow:15,needsRefresh:function(){var e=t.util.date.getDate().getTime(),r=new Date(e+1e3*this.expiryWindow);return this.expireTime&&r>this.expireTime?!0:this.expired||!this.accessKeyId||!this.secretAccessKey},get:function(e){var t=this;this.needsRefresh()?this.refresh(function(r){r||(t.expired=!1),e&&e(r)}):e&&e()},refresh:function(e){this.expired=!1,e()}})},{"./core":3}],5:[function(e){var t=e("../core");t.CognitoIdentityCredentials=t.util.inherit(t.Credentials,{localStorageKey:{id:"aws.cognito.identity-id.",providers:"aws.cognito.identity-providers."},constructor:function(e){t.Credentials.call(this),this.expired=!0,this.webIdentityCredentials=new t.WebIdentityCredentials(e),this.cognito=new t.CognitoIdentity({params:e}),this.sts=new t.STS,this.params=e,this.data=null,this.identityId=null,this.loadCachedId()},refresh:function(e){var t=this;t.data=null,t.identityId=null,t.getId(function(r){r?(t.clearCachedId(),e(r)):t.params.RoleArn?t.getCredentialsFromSTS(e):t.getCredentialsForIdentity(e)})},clearCachedId:function(){var e=this.params.IdentityPoolId;delete this.storage[this.localStorageKey.id+e],delete this.storage[this.localStorageKey.providers+e]},getId:function(e){var t=this;return"string"==typeof t.params.IdentityId?e(null,t.params.IdentityId):void t.cognito.getId(function(r,n){!r&&n.IdentityId?(t.params.IdentityId=n.IdentityId,e(null,n.IdentityId)):e(r)})},loadCredentials:function(e,t){e&&t&&(t.expired=!1,t.accessKeyId=e.Credentials.AccessKeyId,t.secretAccessKey=e.Credentials.SecretKey,t.sessionToken=e.Credentials.SessionToken,t.expireTime=e.Credentials.Expiration)},getCredentialsForIdentity:function(e){var t=this;t.cognito.getCredentialsForIdentity(function(r,n){r?t.clearCachedId():(t.cacheId(n),t.data=n,t.loadCredentials(t.data,t)),e(r)})},getCredentialsFromSTS:function(e){var t=this;t.cognito.getOpenIdToken(function(r,n){r?(t.clearCachedId(),e(r)):(t.cacheId(n),t.params.WebIdentityToken=n.Token,t.webIdentityCredentials.refresh(function(r){r?t.clearCachedId():(t.data=t.webIdentityCredentials.data,t.sts.credentialsFrom(t.data,t)),e(r)}))})},loadCachedId:function(){var e=this;if(t.util.isBrowser()&&!e.params.IdentityId){var r=e.getStorage("id");if(r&&e.params.Logins){var n=Object.keys(e.params.Logins),i=(e.getStorage("providers")||"").split(","),o=i.filter(function(e){return-1!==n.indexOf(e)});0!==o.length&&(e.params.IdentityId=r)}else r&&(e.params.IdentityId=r)}},cacheId:function(e){this.identityId=e.IdentityId,this.params.IdentityId=this.identityId,t.util.isBrowser()&&(this.setStorage("id",e.IdentityId),this.params.Logins&&this.setStorage("providers",Object.keys(this.params.Logins).join(",")))},getStorage:function(e){return this.storage[this.localStorageKey[e]+this.params.IdentityPoolId]},setStorage:function(e,t){this.storage[this.localStorageKey[e]+this.params.IdentityPoolId]=t},storage:function(){try{return t.util.isBrowser()&&"object"==typeof window.localStorage?window.localStorage:{}}catch(e){return{}}}()})},{"../core":3}],6:[function(e){var t=e("../core");t.CredentialProviderChain=t.util.inherit(t.Credentials,{constructor:function(e){this.providers=e?e:t.CredentialProviderChain.defaultProviders.slice(0)},resolve:function(e){function t(i,o){if(!i&&o||r===n.length)return void e(i,o);var a=n[r++];o="function"==typeof a?a.call():a,o.get?o.get(function(e){t(e,e?null:o)}):t(null,o)}if(0===this.providers.length)return e(new Error("No providers")),this;var r=0,n=this.providers.slice(0);return t(),this}}),t.CredentialProviderChain.defaultProviders=[]},{"../core":3}],7:[function(e){var t=e("../core");t.SAMLCredentials=t.util.inherit(t.Credentials,{constructor:function(e){t.Credentials.call(this),this.expired=!0,this.params=e,this.service=new t.STS({params:this.params})},refresh:function(e){var t=this;e||(e=function(e){if(e)throw e}),t.service.assumeRoleWithSAML(function(r,n){r||t.service.credentialsFrom(n,t),e(r)})}})},{"../core":3}],8:[function(e){var t=e("../core");t.TemporaryCredentials=t.util.inherit(t.Credentials,{constructor:function(e){t.Credentials.call(this),this.loadMasterCredentials(),this.expired=!0,this.params=e||{},this.params.RoleArn&&(this.params.RoleSessionName=this.params.RoleSessionName||"temporary-credentials"),this.service=new t.STS({params:this.params})},refresh:function(e){var t=this;e||(e=function(e){if(e)throw e}),t.service.config.credentials=t.masterCredentials;var r=t.params.RoleArn?t.service.assumeRole:t.service.getSessionToken;r.call(t.service,function(r,n){r||t.service.credentialsFrom(n,t),e(r)})},loadMasterCredentials:function(){for(this.masterCredentials=t.config.credentials;this.masterCredentials.masterCredentials;)this.masterCredentials=this.masterCredentials.masterCredentials}})},{"../core":3}],9:[function(e){var t=e("../core");t.WebIdentityCredentials=t.util.inherit(t.Credentials,{constructor:function(e){t.Credentials.call(this),this.expired=!0,this.params=e,this.params.RoleSessionName=this.params.RoleSessionName||"web-identity",this.service=new t.STS({params:this.params}),this.data=null},refresh:function(e){var t=this;e||(e=function(e){if(e)throw e}),t.service.assumeRoleWithWebIdentity(function(r,n){t.data=null,r||(t.data=n,t.service.credentialsFrom(n,t)),e(r)})}})},{"../core":3}],10:[function(e){var t=e("./core"),r=e("./sequential_executor");t.EventListeners={Core:{}},t.EventListeners={Core:(new r).addNamedListeners(function(e,r){r("VALIDATE_CREDENTIALS","validate",function(e,r){return e.service.api.signatureVersion?void e.service.config.getCredentials(function(n){n&&(e.response.error=t.util.error(n,{code:"CredentialsError",message:"Missing credentials in config"})),r()}):r()}),e("VALIDATE_REGION","validate",function(e){e.service.config.region||e.service.isGlobalEndpoint||(e.response.error=t.util.error(new Error,{code:"ConfigError",message:"Missing region in config"}))}),e("VALIDATE_PARAMETERS","validate",function(e){var r=e.service.api.operations[e.operation].input;(new t.ParamValidator).validate(r,e.params)}),e("SET_CONTENT_LENGTH","afterBuild",function(e){if(void 0===e.httpRequest.headers["Content-Length"]){var r=t.util.string.byteLength(e.httpRequest.body);e.httpRequest.headers["Content-Length"]=r}}),e("SET_HTTP_HOST","afterBuild",function(e){e.httpRequest.headers.Host=e.httpRequest.endpoint.host}),e("RESTART","restart",function(){var e=this.response.error;e&&e.retryable&&(this.response.retryCount<this.service.config.maxRetries?this.response.retryCount++:this.response.error=null)}),r("SIGN","sign",function(e,r){return e.service.api.signatureVersion?void e.service.config.getCredentials(function(n,i){if(n)return e.response.error=n,r();try{var o=t.util.date.getDate(),a=e.service.getSignerClass(e),s=new a(e.httpRequest,e.service.api.signingName||e.service.api.endpointPrefix);delete e.httpRequest.headers.Authorization,delete e.httpRequest.headers.Date,delete e.httpRequest.headers["X-Amz-Date"],s.addAuthorization(i,o),e.signedAt=o}catch(u){e.response.error=u}r()}):r()}),e("VALIDATE_RESPONSE","validateResponse",function(e){this.service.successfulResponse(e,this)?(e.data={},e.error=null):(e.data=null,e.error=t.util.error(new Error,{code:"UnknownError",message:"An unknown error occurred."}))}),r("SEND","send",function(e,r){function n(n){e.httpResponse.stream=n,n.on("headers",function(r,i){e.request.emit("httpHeaders",[r,i,e]),e.httpResponse.streaming||(2===t.HttpClient.streamsApiVersion?n.on("readable",function(){var t=n.read();null!==t&&e.request.emit("httpData",[t,e])}):n.on("data",function(t){e.request.emit("httpData",[t,e])}))}),n.on("end",function(){e.request.emit("httpDone"),r()})}function i(t){t.on("sendProgress",function(t){e.request.emit("httpUploadProgress",[t,e])}),t.on("receiveProgress",function(t){e.request.emit("httpDownloadProgress",[t,e])})}function o(n){e.error=t.util.error(n,{code:"NetworkingError",region:e.request.httpRequest.region,hostname:e.request.httpRequest.endpoint.hostname,retryable:!0}),e.request.emit("httpError",[e.error,e],function(){r()})}function a(){var r=t.HttpClient.getInstance(),a=e.request.service.config.httpOptions||{};try{var s=r.handleRequest(e.request.httpRequest,a,n,o);i(s)}catch(u){o(u)}}e.httpResponse._abortCallback=r,e.error=null,e.data=null;var s=(t.util.date.getDate()-this.signedAt)/1e3;s>=600?this.emit("sign",[this],function(e){e?r(e):a()}):a()}),e("HTTP_HEADERS","httpHeaders",function(e,r,n){n.httpResponse.statusCode=e,n.httpResponse.headers=r,n.httpResponse.body=new t.util.Buffer(""),n.httpResponse.buffers=[],n.httpResponse.numBytes=0}),e("HTTP_DATA","httpData",function(e,r){if(e){if(t.util.isNode()){r.httpResponse.numBytes+=e.length;var n=r.httpResponse.headers["content-length"],i={loaded:r.httpResponse.numBytes,total:n};r.request.emit("httpDownloadProgress",[i,r])}r.httpResponse.buffers.push(new t.util.Buffer(e))}}),e("HTTP_DONE","httpDone",function(e){if(e.httpResponse.buffers&&e.httpResponse.buffers.length>0){var r=t.util.buffer.concat(e.httpResponse.buffers);e.httpResponse.body=r}delete e.httpResponse.numBytes,delete e.httpResponse.buffers}),e("FINALIZE_ERROR","retry",function(e){e.httpResponse.statusCode&&(e.error.statusCode=e.httpResponse.statusCode,void 0===e.error.retryable&&(e.error.retryable=this.service.retryableError(e.error,this)))}),e("INVALIDATE_CREDENTIALS","retry",function(e){if(e.error)switch(e.error.code){case"RequestExpired":case"ExpiredTokenException":case"ExpiredToken":e.error.retryable=!0,e.request.service.config.credentials.expired=!0}}),e("EXPIRED_SIGNATURE","retry",function(e){var t=e.error;t&&"string"==typeof t.code&&"string"==typeof t.message&&t.code.match(/Signature/)&&t.message.match(/expired/)&&(e.error.retryable=!0)}),e("REDIRECT","retry",function(e){e.error&&e.error.statusCode>=300&&e.error.statusCode<400&&e.httpResponse.headers.location&&(this.httpRequest.endpoint=new t.Endpoint(e.httpResponse.headers.location),this.httpRequest.headers.Host=this.httpRequest.endpoint.host,e.error.redirect=!0,e.error.retryable=!0)}),e("RETRY_CHECK","retry",function(e){if(e.error)if(e.error.redirect&&e.redirectCount<e.maxRedirects)e.error.retryDelay=0;else if(e.retryCount<e.maxRetries){var t=this.service.retryDelays();e.error.retryDelay=t[e.retryCount]||0}}),r("RESET_RETRY_STATE","afterRetry",function(e,t){var r,n=!1;e.error&&(r=e.error.retryDelay||0,e.error.retryable&&e.retryCount<e.maxRetries?(e.retryCount++,n=!0):e.error.redirect&&e.redirectCount<e.maxRedirects&&(e.redirectCount++,n=!0)),n?(e.error=null,setTimeout(t,r)):t()})}),CorePost:(new r).addNamedListeners(function(e){e("EXTRACT_REQUEST_ID","extractData",function(e){e.requestId||(e.requestId=e.httpResponse.headers["x-amz-request-id"]||e.httpResponse.headers["x-amzn-requestid"]),!e.requestId&&e.data&&e.data.ResponseMetadata&&(e.requestId=e.data.ResponseMetadata.RequestId)}),e("ENOTFOUND_ERROR","httpError",function(e){if("NetworkingError"===e.code&&"ENOTFOUND"===e.errno){var r="Inaccessible host: `"+e.hostname+"'. This service may not be available in the `"+e.region+"' region.";this.response.error=t.util.error(new Error(r),{code:"UnknownEndpoint",region:e.region,hostname:e.hostname,retryable:!1,originalError:e})}})}),Logger:(new r).addNamedListeners(function(r){r("LOG_REQUEST","complete",function(r){function n(){var n=t.util.date.getDate().getTime(),a=(n-i.startTime.getTime())/1e3,s=o.isTTY?!0:!1,u=r.httpResponse.statusCode,c=e("util").inspect(i.params,!0,null),p="";return s&&(p+="[33m"),p+="[AWS "+i.service.serviceIdentifier+" "+u,p+=" "+a.toString()+"s "+r.retryCount+" retries]",s&&(p+="[0;1m"),p+=" "+t.util.string.lowerFirst(i.operation),p+="("+c+")",s&&(p+="[0m"),p}var i=r.request,o=i.service.config.logger;if(o){var a=n();"function"==typeof o.log?o.log(a):"function"==typeof o.write&&o.write(a+"\n")}})}),Json:(new r).addNamedListeners(function(t){var r=e("./protocol/json");t("BUILD","build",r.buildRequest),t("EXTRACT_DATA","extractData",r.extractData),t("EXTRACT_ERROR","extractError",r.extractError)}),Rest:(new r).addNamedListeners(function(t){var r=e("./protocol/rest");t("BUILD","build",r.buildRequest),t("EXTRACT_DATA","extractData",r.extractData),t("EXTRACT_ERROR","extractError",r.extractError)}),RestJson:(new r).addNamedListeners(function(t){var r=e("./protocol/rest_json");t("BUILD","build",r.buildRequest),t("EXTRACT_DATA","extractData",r.extractData),t("EXTRACT_ERROR","extractError",r.extractError)}),RestXml:(new r).addNamedListeners(function(t){var r=e("./protocol/rest_xml");t("BUILD","build",r.buildRequest),t("EXTRACT_DATA","extractData",r.extractData),t("EXTRACT_ERROR","extractError",r.extractError)}),Query:(new r).addNamedListeners(function(t){var r=e("./protocol/query");t("BUILD","build",r.buildRequest),t("EXTRACT_DATA","extractData",r.extractData),t("EXTRACT_ERROR","extractError",r.extractError)})}},{"./core":3,"./protocol/json":22,"./protocol/query":23,"./protocol/rest":24,"./protocol/rest_json":25,"./protocol/rest_xml":26,"./sequential_executor":34,util:70}],11:[function(e){var t=e("./core"),r=t.util.inherit;t.Endpoint=r({constructor:function(e,r){if(t.util.hideProperties(this,["slashes","auth","hash","search","query"]),"undefined"==typeof e||null===e)throw new Error("Invalid endpoint: "+e);if("string"!=typeof e)return t.util.copy(e);if(!e.match(/^http/)){var n=r&&void 0!==r.sslEnabled?r.sslEnabled:t.config.sslEnabled;e=(n?"https":"http")+"://"+e}t.util.update(this,t.util.urlParse(e)),this.port=this.port?parseInt(this.port,10):"https:"===this.protocol?443:80}}),t.HttpRequest=r({constructor:function(e,r){e=new t.Endpoint(e),this.method="POST",this.path=e.path||"/",this.headers={},this.body="",this.endpoint=e,this.region=r,this.setUserAgent()},setUserAgent:function(){var e=t.util.isBrowser()?"X-Amz-":"";this.headers[e+"User-Agent"]=t.util.userAgent()},pathname:function(){return this.path.split("?",1)[0]},search:function(){var e=this.path.split("?",2)[1];return e?(e=t.util.queryStringParse(e),t.util.queryParamsToString(e)):""}}),t.HttpResponse=r({constructor:function(){this.statusCode=void 0,this.headers={},this.body=void 0,this.streaming=!1,this.stream=null},createUnbufferedStream:function(){return this.streaming=!0,this.stream}}),t.HttpClient=r({}),t.HttpClient.getInstance=function(){return void 0===this.singleton&&(this.singleton=new this),this.singleton}},{"./core":3}],12:[function(e){var t=e("../core"),r=e("events").EventEmitter;e("../http"),t.XHRClient=t.util.inherit({handleRequest:function(e,n,i,o){var a=this,s=e.endpoint,u=new r,c=s.protocol+"//"+s.hostname;80!==s.port&&443!==s.port&&(c+=":"+s.port),c+=e.path;var p=new XMLHttpRequest,l=!1;e.stream=p,p.addEventListener("readystatechange",function(){try{if(0===p.status)return}catch(e){return}if(this.readyState>=this.HEADERS_RECEIVED&&!l){try{p.responseType="arraybuffer"}catch(e){}u.statusCode=p.status,u.headers=a.parseHeaders(p.getAllResponseHeaders()),u.emit("headers",u.statusCode,u.headers),l=!0}this.readyState===this.DONE&&a.finishRequest(p,u)},!1),p.upload.addEventListener("progress",function(e){u.emit("sendProgress",e)}),p.addEventListener("progress",function(e){u.emit("receiveProgress",e)},!1),p.addEventListener("timeout",function(){o(t.util.error(new Error("Timeout"),{code:"TimeoutError"}))},!1),p.addEventListener("error",function(){o(t.util.error(new Error("Network Failure"),{code:"NetworkingError"}))},!1),i(u),p.open(e.method,c,n.xhrAsync!==!1),t.util.each(e.headers,function(e,t){"Content-Length"!==e&&"User-Agent"!==e&&"Host"!==e&&p.setRequestHeader(e,t)}),n.timeout&&n.xhrAsync!==!1&&(p.timeout=n.timeout),n.xhrWithCredentials&&(p.withCredentials=!0);try{p.send(e.body)}catch(m){if(!e.body||"object"!=typeof e.body.buffer)throw m;p.send(e.body.buffer)}return u},parseHeaders:function(e){var r={};return t.util.arrayEach(e.split(/\r?\n/),function(e){var t=e.split(":",1)[0],n=e.substring(t.length+2);t.length>0&&(r[t]=n)}),r},finishRequest:function(e,r){var n;if("arraybuffer"===e.responseType&&e.response){var i=e.response;n=new t.util.Buffer(i.byteLength);for(var o=new Uint8Array(i),a=0;a<n.length;++a)n[a]=o[a]}try{n||"string"!=typeof e.responseText||(n=new t.util.Buffer(e.responseText))}catch(s){}n&&r.emit("data",n),r.emit("end")}}),t.HttpClient.prototype=t.XHRClient.prototype,t.HttpClient.streamsApiVersion=1},{"../core":3,"../http":11,events:61}],13:[function(e,t){function r(){}function n(e,t){if(!t||void 0===e||null===e)return void 0;switch(t.type){case"structure":return i(e,t);case"map":return a(e,t);case"list":return o(e,t);default:return s(e,t)}}function i(e,t){var r={};return u.each(e,function(e,i){var o=t.members[e];if(o){if("body"!==o.location)return;var a=n(i,o);void 0!==a&&(r[e]=a)}}),r}function o(e,t){var r=[];return u.arrayEach(e,function(e){var i=n(e,t.member);void 0!==i&&r.push(i)}),r}function a(e,t){var r={};return u.each(e,function(e,i){var o=n(i,t.value);void 0!==o&&(r[e]=o)}),r}function s(e,t){return t.toWireFormat(e)}var u=e("../util");r.prototype.build=function(e,t){return JSON.stringify(n(e,t))},t.exports=r},{"../util":49}],14:[function(e,t){function r(){}function n(e,t){if(!t||void 0===e||null===e)return void 0;switch(t.type){case"structure":return i(e,t);case"map":return a(e,t);case"list":return o(e,t);default:return s(e,t)}}function i(e,t){var r={};return u.each(e,function(e,i){var o=t.members[e];if(o){var a=n(i,o);void 0!==a&&(r[e]=a)}}),r}function o(e,t){var r=[];return u.arrayEach(e,function(e){var i=n(e,t.member);void 0!==i&&r.push(i)}),r}function a(e,t){var r={};return u.each(e,function(e,i){var o=n(i,t.value);void 0!==o&&(r[e]=o)}),r}function s(e,t){return t.toType(e)}var u=e("../util");r.prototype.parse=function(e,t){return n(JSON.parse(e),t)},t.exports=r},{"../util":49}],15:[function(e,t){function r(e,t){e=e||{},t=t||{},t.api=this,e.metadata=e.metadata||{},c(this,"isApi",!0,!1),c(this,"apiVersion",e.metadata.apiVersion),c(this,"endpointPrefix",e.metadata.endpointPrefix),c(this,"signingName",e.metadata.signingName),c(this,"globalEndpoint",e.metadata.globalEndpoint),c(this,"signatureVersion",e.metadata.signatureVersion),c(this,"jsonVersion",e.metadata.jsonVersion),c(this,"targetPrefix",e.metadata.targetPrefix),c(this,"protocol",e.metadata.protocol),c(this,"timestampFormat",e.metadata.timestampFormat),c(this,"xmlNamespaceUri",e.metadata.xmlNamespace),c(this,"abbreviation",e.metadata.serviceAbbreviation),c(this,"fullName",e.metadata.serviceFullName),p(this,"className",function(){var t=e.metadata.serviceAbbreviation||e.metadata.serviceFullName;return t?(t=t.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g,""),"ElasticLoadBalancing"===t&&(t="ELB"),t):null}),c(this,"operations",new n(e.operations,t,function(e,r){return new i(e,r,t)},u.string.lowerFirst)),c(this,"shapes",new n(e.shapes,t,function(e,r){return o.create(r,t)})),c(this,"paginators",new n(e.paginators,t,function(e,r){return new a(e,r,t)})),c(this,"waiters",new n(e.waiters,t,function(e,r){return new s(e,r,t)},u.string.lowerFirst)),t.documentation&&(c(this,"documentation",e.documentation),c(this,"documentationUrl",e.documentationUrl))}var n=e("./collection"),i=e("./operation"),o=e("./shape"),a=e("./paginator"),s=e("./resource_waiter"),u=e("../util"),c=u.property,p=u.memoizedProperty;t.exports=r},{"../util":49,"./collection":16,"./operation":17,"./paginator":18,"./resource_waiter":19,"./shape":20}],16:[function(e,t){function r(e,t,r,n){i(this,n(e),function(){return r(e,t)})}function n(e,t,n,i){i=i||String;var o=this;for(var a in e)e.hasOwnProperty(a)&&r.call(o,a,e[a],n,i)}var i=e("../util").memoizedProperty;t.exports=n},{"../util":49}],17:[function(e,t){function r(e,t,r){r=r||{},o(this,"name",t.name||e),o(this,"api",r.api,!1),t.http=t.http||{},o(this,"httpMethod",t.http.method||"POST"),o(this,"httpPath",t.http.requestUri||"/"),a(this,"input",function(){return t.input?n.create(t.input,r):new n.create({type:"structure"},r)}),a(this,"output",function(){return t.output?n.create(t.output,r):new n.create({type:"structure"},r)}),a(this,"errors",function(){var e=[];if(!t.errors)return null;for(var i=0;i<t.errors.length;i++)e.push(n.create(t.errors[i],r));return e}),a(this,"paginator",function(){return r.api.paginators[e]}),r.documentation&&(o(this,"documentation",t.documentation),o(this,"documentationUrl",t.documentationUrl))}var n=e("./shape"),i=e("../util"),o=i.property,a=i.memoizedProperty;t.exports=r},{"../util":49,"./shape":20}],18:[function(e,t){function r(e,t){n(this,"inputToken",t.input_token),n(this,"limitKey",t.limit_key),n(this,"moreResults",t.more_results),n(this,"outputToken",t.output_token),n(this,"resultKey",t.result_key)}var n=e("../util").property;t.exports=r},{"../util":49}],19:[function(e,t){function r(e,t,r){function o(){i(this,"name",e),i(this,"api",r.api,!1),t.operation&&i(this,"operation",n.string.lowerFirst(t.operation));var o=this,a={ignoreErrors:"ignore_errors",successType:"success_type",successValue:"success_value",successPath:"success_path",acceptorType:"acceptor_type",acceptorValue:"acceptor_value",acceptorPath:"acceptor_path",failureType:"failure_type",failureValue:"failure_value",failurePath:"success_path",interval:"interval",maxAttempts:"max_attempts"};Object.keys(a).forEach(function(e){var r=t[a[e]];r&&i(o,e,r)})}if(r=r||{},r.api){var a=null;t["extends"]?a=r.api.waiters[t["extends"]]:"__default__"!==e&&(a=r.api.waiters.__default__),a&&(o.prototype=a)}return new o}var n=e("../util"),i=n.property;t.exports=r},{"../util":49}],20:[function(e,t){function r(e,t,r){null!==r&&void 0!==r&&g.property.apply(this,arguments)}function n(e,t){e.constructor.prototype[t]||g.memoizedProperty.apply(this,arguments)}function i(e,t,n){t=t||{},r(this,"shape",e.shape),r(this,"api",t.api,!1),r(this,"type",e.type),r(this,"location",e.location||"body"),r(this,"name",this.name||e.xmlName||e.queryName||e.locationName||n),r(this,"isStreaming",e.streaming||this.isStreaming||!1),r(this,"isComposite",e.isComposite||!1),r(this,"isShape",!0,!1),r(this,"isQueryName",e.queryName?!0:!1,!1),t.documentation&&(r(this,"documentation",e.documentation),r(this,"documentationUrl",e.documentationUrl)),e.xmlAttribute&&r(this,"isXmlAttribute",e.xmlAttribute||!1),r(this,"defaultValue",null),this.toWireFormat=function(e){return null===e||void 0===e?"":e},this.toType=function(e){return e}}function o(e){i.apply(this,arguments),r(this,"isComposite",!0),e.flattened&&r(this,"flattened",e.flattened||!1)}function a(e,t){var a=null,s=!this.isShape;o.apply(this,arguments),s&&(r(this,"defaultValue",function(){return{}}),r(this,"members",{}),r(this,"memberNames",[]),r(this,"required",[]),r(this,"isRequired",function(){return!1})),e.members&&(r(this,"members",new f(e.members,t,function(e,r){return i.create(r,t,e)})),n(this,"memberNames",function(){return e.xmlOrder||Object.keys(e.members)})),e.required&&(r(this,"required",e.required),r(this,"isRequired",function(t){if(!a){a={};for(var r=0;r<e.required.length;r++)a[e.required[r]]=!0}return a[t]},!1,!0)),r(this,"resultWrapper",e.resultWrapper||null),e.payload&&r(this,"payload",e.payload),"string"==typeof e.xmlNamespace?r(this,"xmlNamespaceUri",e.xmlNamespace):"object"==typeof e.xmlNamespace&&(r(this,"xmlNamespacePrefix",e.xmlNamespace.prefix),r(this,"xmlNamespaceUri",e.xmlNamespace.uri))}function s(e,t){var a=this,s=!this.isShape;if(o.apply(this,arguments),s&&r(this,"defaultValue",function(){return[]}),e.member&&n(this,"member",function(){return i.create(e.member,t)}),this.flattened){var u=this.name;n(this,"name",function(){return a.member.name||u})}}function u(e,t){var a=!this.isShape;o.apply(this,arguments),a&&(r(this,"defaultValue",function(){return{}}),r(this,"key",i.create({type:"string"},t)),r(this,"value",i.create({type:"string"},t))),e.key&&n(this,"key",function(){return i.create(e.key,t)}),e.value&&n(this,"value",function(){return i.create(e.value,t)})}function c(e){var t=this;if(i.apply(this,arguments),"header"===this.location)r(this,"timestampFormat","rfc822");else if(e.timestampFormat)r(this,"timestampFormat",e.timestampFormat);else if(this.api)if(this.api.timestampFormat)r(this,"timestampFormat",this.api.timestampFormat);else switch(this.api.protocol){case"json":case"rest-json":r(this,"timestampFormat","unixTimestamp");break;case"rest-xml":case"query":case"ec2":r(this,"timestampFormat","iso8601")}this.toType=function(e){return null===e||void 0===e?null:"function"==typeof e.toUTCString?e:"string"==typeof e||"number"==typeof e?g.date.parseTimestamp(e):null},this.toWireFormat=function(e){return g.date.format(e,t.timestampFormat)}}function p(){if(i.apply(this,arguments),this.api)switch(this.api.protocol){case"rest-xml":case"query":case"ec2":this.toType=function(e){return e||""}}}function l(){i.apply(this,arguments),this.toType=function(e){return null===e||void 0===e?null:parseFloat(e)},this.toWireFormat=this.toType}function m(){i.apply(this,arguments),this.toType=function(e){return null===e||void 0===e?null:parseInt(e,10)},this.toWireFormat=this.toType}function d(){i.apply(this,arguments),this.toType=g.base64.decode,this.toWireFormat=g.base64.encode}function h(){d.apply(this,arguments)}function y(){i.apply(this,arguments),this.toType=function(e){return"boolean"==typeof e?e:null===e||void 0===e?null:"true"===e}}var f=e("./collection"),g=e("../util");i.normalizedTypes={character:"string","double":"float","long":"integer","short":"integer",biginteger:"integer",bigdecimal:"float",blob:"binary"},i.types={structure:a,list:s,map:u,"boolean":y,timestamp:c,"float":l,integer:m,string:p,base64:h,binary:d},i.resolve=function(e,t){if(e.shape){var r=t.api.shapes[e.shape];if(!r)throw new Error("Cannot find shape reference: "+e.shape);return r}return null},i.create=function(e,t,r){if(e.isShape)return e;var n=i.resolve(e,t);if(n){var o=Object.keys(e);if(t.documentation||(o=o.filter(function(e){return!e.match(/documentation/)})),o===["shape"])return n;var a=function(){n.constructor.call(this,e,t,r)};return a.prototype=n,new a}e.type||(e.type=e.members?"structure":e.member?"list":e.key?"map":"string");var s=e.type;if(i.normalizedTypes[e.type]&&(e.type=i.normalizedTypes[e.type]),i.types[e.type])return new i.types[e.type](e,t,r);throw new Error("Unrecognized shape type: "+s)},i.shapes={StructureShape:a,ListShape:s,MapShape:u,StringShape:p,BooleanShape:y,Base64Shape:h},t.exports=i},{"../util":49,"./collection":16}],21:[function(e){var t=e("./core");t.ParamValidator=t.util.inherit({validate:function(e,r,n){if(this.errors=[],this.validateMember(e,r||{},n||"params"),!(this.errors.length>1)){if(1===this.errors.length)throw this.errors[0];return!0}var i=this.errors.join("\n* ");if(this.errors.length>1)throw i="There were "+this.errors.length+" validation errors:\n* "+i,t.util.error(new Error(i),{code:"MultipleValidationErrors",errors:this.errors})},validateStructure:function(e,t,r){this.validateType(r,t,["object"],"structure");for(var n,i=0;e.required&&i<e.required.length;i++){n=e.required[i];var o=t[n];(void 0===o||null===o)&&this.fail("MissingRequiredParameter","Missing required key '"+n+"' in "+r)}for(n in t)if(t.hasOwnProperty(n)){var a=t[n],s=e.members[n];if(void 0!==s){var u=[r,n].join(".");this.validateMember(s,a,u)}else this.fail("UnexpectedParameter","Unexpected key '"+n+"' found in "+r)}return!0},validateMember:function(e,t,r){switch(e.type){case"structure":return this.validateStructure(e,t,r);case"list":return this.validateList(e,t,r);case"map":return this.validateMap(e,t,r);default:return this.validateScalar(e,t,r)}},validateList:function(e,t,r){this.validateType(r,t,[Array]);
for(var n=0;n<t.length;n++)this.validateMember(e.member,t[n],r+"["+n+"]")},validateMap:function(e,t,r){this.validateType(r,t,["object"],"map");for(var n in t)t.hasOwnProperty(n)&&this.validateMember(e.value,t[n],r+"['"+n+"']")},validateScalar:function(e,t,r){switch(e.type){case null:case void 0:case"string":return this.validateType(r,t,["string"]);case"base64":case"binary":return this.validatePayload(r,t);case"integer":case"float":return this.validateNumber(r,t);case"boolean":return this.validateType(r,t,["boolean"]);case"timestamp":return this.validateType(r,t,[Date,/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/,"number"],"Date object, ISO-8601 string, or a UNIX timestamp");default:return this.fail("UnkownType","Unhandled type "+e.type+" for "+r)}},fail:function(e,r){this.errors.push(t.util.error(new Error(r),{code:e}))},validateType:function(e,r,n,i){if(null!==r&&void 0!==r){for(var o=!1,a=0;a<n.length;a++){if("string"==typeof n[a]){if(typeof r===n[a])return}else if(n[a]instanceof RegExp){if((r||"").toString().match(n[a]))return}else{if(r instanceof n[a])return;if(t.util.isType(r,n[a]))return;i||o||(n=n.slice()),n[a]=t.util.typeName(n[a])}o=!0}var s=i;s||(s=n.join(", ").replace(/,([^,]+)$/,", or$1"));var u=s.match(/^[aeiou]/i)?"n":"";this.fail("InvalidParameterType","Expected "+e+" to be a"+u+" "+s)}},validateNumber:function(e,t){if(null!==t&&void 0!==t){if("string"==typeof t){var r=parseFloat(t);r.toString()===t&&(t=r)}this.validateType(e,t,["number"])}},validatePayload:function(e,r){if(null!==r&&void 0!==r&&"string"!=typeof r&&(!r||"number"!=typeof r.byteLength)){if(t.util.isNode()){var n=t.util.nodeRequire("stream").Stream;if(t.util.Buffer.isBuffer(r)||r instanceof n)return}var i=["Buffer","Stream","File","Blob","ArrayBuffer","DataView"];if(r)for(var o=0;o<i.length;o++){if(t.util.isType(r,i[o]))return;if(t.util.typeName(r.constructor)===i[o])return}this.fail("InvalidParameterType","Expected "+e+" to be a string, Buffer, Stream, Blob, or typed array object")}}})},{"./core":3}],22:[function(e,t){function r(e){var t=e.httpRequest,r=e.service.api,n=r.targetPrefix+"."+r.operations[e.operation].name,i=r.jsonVersion||"1.0",o=r.operations[e.operation].input,s=new a;1===i&&(i="1.0"),t.body=s.build(e.params||{},o),t.headers["Content-Type"]="application/x-amz-json-"+i,t.headers["X-Amz-Target"]=n}function n(e){var t={},r=e.httpResponse;if(t.code=r.headers["x-amzn-errortype"]||"UnknownError","string"==typeof t.code&&(t.code=t.code.split(":")[0]),r.body.length>0){var n=JSON.parse(r.body.toString());(n.__type||n.code)&&(t.code=(n.__type||n.code).split("#").pop()),t.message="RequestEntityTooLarge"===t.code?"Request body must be less than 1 MB":n.message||n.Message||null}else t.statusCode=r.statusCode,t.message=r.statusCode.toString();e.error=o.error(new Error,t)}function i(e){var t=e.httpResponse.body.toString()||"{}";if(e.request.service.config.convertResponseTypes===!1)e.data=JSON.parse(t);else{var r=e.request.service.api.operations[e.request.operation],n=r.output||{},i=new s;e.data=i.parse(t,n)}}var o=e("../util"),a=e("../json/builder"),s=e("../json/parser");t.exports={buildRequest:r,extractError:n,extractData:i}},{"../json/builder":13,"../json/parser":14,"../util":49}],23:[function(e,t){function r(e){var t=e.service.api.operations[e.operation],r=e.httpRequest;r.headers["Content-Type"]="application/x-www-form-urlencoded; charset=utf-8",r.params={Version:e.service.api.apiVersion,Action:t.name};var n=new s;n.serialize(e.params,t.input,function(e,t){r.params[e]=t}),r.body=a.queryParamsToString(r.params)}function n(e){var t,r=e.httpResponse.body.toString();t=r.match("<UnknownOperationException")?{Code:"UnknownOperation",Message:"Unknown operation "+e.request.operation}:(new o.XML.Parser).parse(r),t.requestId&&!e.requestId&&(e.requestId=t.requestId),t.Errors&&(t=t.Errors),t.Error&&(t=t.Error),e.error=t.Code?a.error(new Error,{code:t.Code,message:t.Message}):a.error(new Error,{code:e.httpResponse.statusCode,message:null})}function i(e){var t=e.request,r=t.service.api.operations[t.operation],n=r.output||{},i=n;if(i.resultWrapper){var s=u.create({type:"structure"});s.members[i.resultWrapper]=n,s.memberNames=[i.resultWrapper],a.property(n,"name",n.resultWrapper),n=s}var c=new o.XML.Parser;if(n&&n.members&&!n.members._XAMZRequestId){var p=u.create({type:"string"},{api:{protocol:"query"}},"requestId");n.members._XAMZRequestId=p}var l=c.parse(e.httpResponse.body.toString(),n);e.requestId=l._XAMZRequestId||l.requestId,l._XAMZRequestId&&delete l._XAMZRequestId,i.resultWrapper&&l[i.resultWrapper]&&(a.update(l,l[i.resultWrapper]),delete l[i.resultWrapper]),e.data=l}var o=e("../core"),a=e("../util"),s=e("../query/query_param_serializer"),u=e("../model/shape");t.exports={buildRequest:r,extractError:n,extractData:i}},{"../core":3,"../model/shape":20,"../query/query_param_serializer":27,"../util":49}],24:[function(e,t){function r(e){e.httpRequest.method=e.service.api.operations[e.operation].httpMethod}function n(e){var t=e.service.api.operations[e.operation],r=t.input,n=[e.httpRequest.endpoint.path,t.httpPath].join("/");n=n.replace(/\/+/g,"/");var i={},o=!1;if(u.each(r.members,function(t,r){var a=e.params[t];if(null!==a&&void 0!==a)if("uri"===r.location){var s=new RegExp("\\{"+r.name+"(\\+)?\\}");n=n.replace(s,function(e,t){var r=t?u.uriEscapePath:u.uriEscape;return r(String(a))})}else"querystring"===r.location&&(o=!0,i[r.name]="list"===r.type?a.map(function(e){return u.uriEscape(String(e))}):u.uriEscape(String(a)))}),o){n+=n.indexOf("?")>=0?"&":"?";var a=[];u.arrayEach(Object.keys(i).sort(),function(e){Array.isArray(i[e])||(i[e]=[i[e]]);for(var t=0;t<i[e].length;t++)a.push(u.uriEscape(String(e))+"="+i[e][t])}),n+=a.join("&")}e.httpRequest.path=n}function i(e){var t=e.service.api.operations[e.operation];u.each(t.input.members,function(t,r){var n=e.params[t];null!==n&&void 0!==n&&("headers"===r.location&&"map"===r.type?u.each(n,function(t,n){e.httpRequest.headers[r.name+t]=n}):"header"===r.location&&(n=r.toWireFormat(n).toString(),e.httpRequest.headers[r.name]=n))})}function o(e){r(e),n(e),i(e)}function a(){}function s(e){var t=e.request,r={},n=e.httpResponse,i=t.service.api.operations[t.operation],o=i.output,a={};u.each(n.headers,function(e,t){a[e.toLowerCase()]=t}),u.each(o.members,function(e,t){var i=(t.name||e).toLowerCase();"headers"===t.location&&"map"===t.type?(r[e]={},u.each(n.headers,function(n,i){var o=n.match(new RegExp("^"+t.name+"(.+)","i"));null!==o&&(r[e][o[1]]=i)})):"header"===t.location?void 0!==a[i]&&(r[e]=a[i]):"statusCode"===t.location&&(r[e]=parseInt(n.statusCode,10))}),e.data=r}var u=e("../util");t.exports={buildRequest:o,extractError:a,extractData:s}},{"../util":49}],25:[function(e,t){function r(e){var t=new c,r=e.service.api.operations[e.operation].input;if(r.payload){var n={},i=r.members[r.payload];if(n=e.params[r.payload],void 0===n)return;e.httpRequest.body="structure"===i.type?t.build(n,i):n}else e.httpRequest.body=t.build(e.params,r)}function n(e){s.buildRequest(e),["GET","HEAD"].indexOf(e.httpRequest.method)<0&&r(e)}function i(e){u.extractError(e)}function o(e){s.extractData(e);var t=e.request,r=t.service.api.operations[t.operation].output||{};if(r.payload){var n=r.members[r.payload],i=e.httpResponse.body;if(n.isStreaming)e.data[r.payload]=i;else if("structure"===n.type){var o=new p;e.data[r.payload]=o.parse(i,n)}else e.data[r.payload]=i.toString()}else{var c=e.data;u.extractData(e),e.data=a.merge(c,e.data)}}var a=e("../util"),s=e("./rest"),u=e("./json"),c=e("../json/builder"),p=e("../json/parser");t.exports={buildRequest:n,extractError:i,extractData:o}},{"../json/builder":13,"../json/parser":14,"../util":49,"./json":22,"./rest":24}],26:[function(e,t){function r(e){var t=e.service.api.operations[e.operation].input,r=new a.XML.Builder,n=e.params,i=t.payload;if(i){var o=t.members[i];if(n=n[i],void 0===n)return;if("structure"===o.type){var u=o.name;e.httpRequest.body=r.toXML(n,o,u)}else e.httpRequest.body=n}else e.httpRequest.body=r.toXML(n,t,t.shape||s.string.upperFirst(e.operation)+"Request")}function n(e){u.buildRequest(e),["GET","HEAD"].indexOf(e.httpRequest.method)<0&&r(e)}function i(e){u.extractError(e);var t=(new a.XML.Parser).parse(e.httpResponse.body.toString());t.Errors&&(t=t.Errors),t.Error&&(t=t.Error),e.error=t.Code?s.error(new Error,{code:t.Code,message:t.Message}):s.error(new Error,{code:e.httpResponse.statusCode,message:null})}function o(e){u.extractData(e);var t,r=e.request,n=e.httpResponse.body,i=r.service.api.operations[r.operation],o=i.output,c=o.payload;if(c){var p=o.members[c];p.isStreaming?e.data[c]=n:"structure"===p.type?(t=new a.XML.Parser,s.update(e.data,t.parse(n.toString(),p))):e.data[c]=n.toString()}else if(n.length>0){t=new a.XML.Parser;var l=t.parse(n.toString(),o);s.update(e.data,l)}}var a=e("../core"),s=e("../util"),u=e("./rest");t.exports={buildRequest:n,extractError:i,extractData:o}},{"../core":3,"../util":49,"./rest":24}],27:[function(e,t){function r(){}function n(e){return e.isQueryName||"ec2"!==e.api.protocol?e.name:e.name[0].toUpperCase()+e.name.substr(1)}function i(e,t,r,i){u.each(r.members,function(r,o){var a=t[r];if(null!==a&&void 0!==a){var u=n(o);u=e?e+"."+u:u,s(u,a,o,i)}})}function o(e,t,r,n){var i=1;u.each(t,function(t,o){var a=r.flattened?".":".entry.",u=a+i++ +".",c=u+(r.key.name||"key"),p=u+(r.value.name||"value");s(e+c,t,r.key,n),s(e+p,o,r.value,n)})}function a(e,t,r,i){var o=r.member||{};return 0===t.length?void i.call(this,e,null):void u.arrayEach(t,function(t,a){var u="."+(a+1);if("ec2"===r.api.protocol)u+="";else if(r.flattened){if(o.name){var c=e.split(".");c.pop(),c.push(n(o)),e=c.join(".")}}else u=".member"+u;s(e+u,t,o,i)})}function s(e,t,r,n){null!==t&&void 0!==t&&("structure"===r.type?i(e,t,r,n):"list"===r.type?a(e,t,r,n):"map"===r.type?o(e,t,r,n):n(e,r.toWireFormat(t).toString()))}var u=e("../util");r.prototype.serialize=function(e,t,r){i("",e,t,r)},t.exports=r},{"../util":49}],28:[function(e,t){function r(e){if(!e)return null;var t=e.split("-");return t.length<3?null:t.slice(0,t.length-2).join("-")+"-*"}function n(e){var t=e.config.region,n=r(t),i=e.api.endpointPrefix;return[[t,i],[n,i],[t,"*"],[n,"*"],["*",i],["*","*"]].map(function(e){return e[0]&&e[1]?e.join("/"):null})}function i(e,t){a.each(t,function(t,r){"globalEndpoint"!==t&&(void 0===e.config[t]||null===e.config[t])&&(e.config[t]=r)})}function o(e){for(var t=n(e),r=0;r<t.length;r++){var o=t[r];if(o&&s.rules.hasOwnProperty(o)){var a=s.rules[o];return"string"==typeof a&&(a=s.patterns[a]),e.isGlobalEndpoint=!!a.globalEndpoint,a.signatureVersion||(a.signatureVersion="v4"),void i(e,a)}}}var a=e("./util"),s=e("./region_config.json");t.exports=o},{"./region_config.json":29,"./util":49}],29:[function(e,t){t.exports={rules:{"*/*":{endpoint:"{service}.{region}.amazonaws.com"},"cn-*/*":{endpoint:"{service}.{region}.amazonaws.com.cn"},"*/cloudfront":"globalSSL","*/iam":"globalSSL","*/sts":"globalSSL","*/importexport":{endpoint:"{service}.amazonaws.com",signatureVersion:"v2",globalEndpoint:!0},"*/route53":{endpoint:"https://{service}.amazonaws.com",signatureVersion:"v3https",globalEndpoint:!0},"us-gov-*/iam":"globalGovCloud","us-gov-*/sts":{endpoint:"{service}.{region}.amazonaws.com"},"us-gov-west-1/s3":"s3dash","us-west-1/s3":"s3dash","us-west-2/s3":"s3dash","eu-west-1/s3":"s3dash","ap-southeast-1/s3":"s3dash","ap-southeast-2/s3":"s3dash","ap-northeast-1/s3":"s3dash","sa-east-1/s3":"s3dash","us-east-1/s3":{endpoint:"{service}.amazonaws.com",signatureVersion:"s3"},"us-east-1/sdb":{endpoint:"{service}.amazonaws.com",signatureVersion:"v2"},"*/sdb":{endpoint:"{service}.{region}.amazonaws.com",signatureVersion:"v2"}},patterns:{globalSSL:{endpoint:"https://{service}.amazonaws.com",globalEndpoint:!0},globalGovCloud:{endpoint:"{service}.us-gov.amazonaws.com"},s3dash:{endpoint:"{service}-{region}.amazonaws.com",signatureVersion:"s3"}}}},{}],30:[function(e){(function(t){function r(e){return s.hasOwnProperty(e._asm.currentState)}var n=e("./core"),i=e("./state_machine"),o=n.util.inherit,a=n.util.nodeRequire("domain"),s={success:1,error:1,complete:1},u=new i;u.setupStates=function(){var e=function(e,t){var n=this;try{n.emit(n._asm.currentState,function(){t(n.response.error)})}catch(i){if(r(n)){if(!(a&&n.domain instanceof a.Domain))throw i;i.domainEmitter=n,i.domain=n.domain,i.domainThrown=!1,n.domain.emit("error",i)}else n.response.error=i,t(i)}};this.addState("validate","build","error",e),this.addState("build","afterBuild","restart",e),this.addState("afterBuild","sign","restart",e),this.addState("sign","send","retry",e),this.addState("retry","afterRetry","afterRetry",e),this.addState("afterRetry","sign","error",e),this.addState("send","validateResponse","retry",e),this.addState("validateResponse","extractData","extractError",e),this.addState("extractError","extractData","retry",e),this.addState("extractData","success","retry",e),this.addState("restart","build","error",e),this.addState("success","complete","complete",e),this.addState("error","complete","complete",e),this.addState("complete",null,null,e)},u.setupStates(),n.Request=o({constructor:function(e,t,r){var o=e.endpoint,s=e.config.region;e.isGlobalEndpoint&&(s="us-east-1"),this.domain=a&&a.active,this.service=e,this.operation=t,this.params=r||{},this.httpRequest=new n.HttpRequest(o,s),this.startTime=n.util.date.getDate(),this.response=new n.Response(this),this._asm=new i(u.states,"validate"),n.SequentialExecutor.call(this),this.emit=this.emitEvent},send:function(e){return e&&this.on("complete",function(t){e.call(t,t.error,t.data)}),this.runTo(),this.response},build:function(e){return this.runTo("send",e)},runTo:function(e,t){return this._asm.runTo(e,t,this),this},abort:function(){return this.removeAllListeners("validateResponse"),this.removeAllListeners("extractError"),this.on("validateResponse",function(e){e.error=n.util.error(new Error("Request aborted by user"),{code:"RequestAbortedError",retryable:!1})}),this.httpRequest.stream&&(this.httpRequest.stream.abort(),this.httpRequest._abortCallback?this.httpRequest._abortCallback():this.removeAllListeners("send")),this},eachPage:function(e){function t(r){e.call(r,r.error,r.data,function(i){i!==!1&&(r.hasNextPage()?r.nextPage().on("complete",t).send():e.call(r,null,null,n.util.fn.noop))})}e=n.util.fn.makeAsync(e,3),this.on("complete",t).send()},eachItem:function(e){function t(t,i){if(t)return e(t,null);if(null===i)return e(null,null);var o=r.service.paginationConfig(r.operation),a=o.resultKey;Array.isArray(a)&&(a=a[0]);var s=n.util.jamespath.query(a,i);n.util.arrayEach(s,function(t){n.util.arrayEach(t,function(t){e(null,t)})})}var r=this;this.eachPage(t)},isPageable:function(){return this.service.paginationConfig(this.operation)?!0:!1},createReadStream:function(){var e=n.util.nodeRequire("stream"),r=this,i=null,o=!1;return 2===n.HttpClient.streamsApiVersion?(i=new e.Readable,i._read=function(){}):(i=new e.Stream,i.readable=!0),i.sent=!1,i.on("newListener",function(e){i.sent||"data"!==e&&"readable"!==e||("data"===e&&(o=!0),i.sent=!0,t.nextTick(function(){r.send(function(){})}))}),this.on("httpHeaders",function(e,t,a){if(300>e){r.removeListener("httpData",n.EventListeners.Core.HTTP_DATA),r.removeListener("httpError",n.EventListeners.Core.HTTP_ERROR),r.on("httpError",function(e){a.error=e,a.error.retryable=!1});var s=a.httpResponse.createUnbufferedStream();o?(s.on("data",function(e){i.emit("data",e)}),s.on("end",function(){i.emit("end")})):(s.on("readable",function(){var e;do e=s.read(),null!==e&&i.push(e);while(null!==e);i.read(0)}),s.on("end",function(){i.push(null)})),s.on("error",function(e){i.emit("error",e)})}}),this.on("error",function(e){i.emit("error",e)}),i},emitEvent:function(e,t,r){"function"==typeof t&&(r=t,t=null),r||(r=function(){}),t||(t=this.eventParameters(e,this.response));var i=n.SequentialExecutor.prototype.emit;i.call(this,e,t,function(e){e&&(this.response.error=e),r.call(this,e)})},eventParameters:function(e){switch(e){case"restart":case"validate":case"sign":case"build":case"afterValidate":case"afterBuild":return[this];case"error":return[this.response.error,this.response];default:return[this.response]}},presign:function(e,t){return t||"function"!=typeof e||(t=e,e=null),(new n.Signers.Presign).sign(this.toGet(),e,t)},toUnauthenticated:function(){return this.removeListener("validate",n.EventListeners.Core.VALIDATE_CREDENTIALS),this.removeListener("sign",n.EventListeners.Core.SIGN),this.toGet()},toGet:function(){return("query"===this.service.api.protocol||"ec2"===this.service.api.protocol)&&(this.removeListener("build",this.buildAsGet),this.addListener("build",this.buildAsGet)),this},buildAsGet:function(e){e.httpRequest.method="GET",e.httpRequest.path=e.service.endpoint.path+"?"+e.httpRequest.body,e.httpRequest.body="",delete e.httpRequest.headers["Content-Length"],delete e.httpRequest.headers["Content-Type"]}}),n.util.mixin(n.Request,n.SequentialExecutor)}).call(this,e("FWaASH"))},{"./core":3,"./state_machine":48,FWaASH:63}],31:[function(e){var t=e("./core"),r=t.util.inherit;t.ResourceWaiter=r({constructor:function(e,r){this.service=e,this.state=r,"object"==typeof this.state&&t.util.each.call(this,this.state,function(e,t){this.state=e,this.expectedValue=t}),this.loadWaiterConfig(this.state),this.expectedValue||(this.expectedValue=this.config.successValue)},service:null,state:null,expectedValue:null,config:null,waitDone:!1,Listeners:{retry:(new t.SequentialExecutor).addNamedListeners(function(e){e("RETRY_CHECK","retry",function(e){var t=e.request._waiter;e.error&&"ResourceNotReady"===e.error.code&&(e.error.retryDelay=1e3*t.config.interval)})}),output:(new t.SequentialExecutor).addNamedListeners(function(e){e("CHECK_OUT_ERROR","extractError",function(e){e.error&&e.request._waiter.setError(e,!0)}),e("CHECK_OUTPUT","extractData",function(e){var t=e.request._waiter,r=t.checkSuccess(e);r?e.error=null:t.setError(e,null===r?!1:!0)})}),error:(new t.SequentialExecutor).addNamedListeners(function(e){e("CHECK_ERROR","extractError",function(e){var t=e.request._waiter,r=t.checkError(e);r?(e.error=null,e.data={},e.request.removeAllListeners("extractData")):t.setError(e,null===r?!1:!0)}),e("CHECK_ERR_OUTPUT","extractData",function(e){e.request._waiter.setError(e,!0)})})},wait:function(e,t){"function"==typeof e&&(t=e,e=void 0);var r=this.service.makeRequest(this.config.operation,e),n=this.Listeners[this.config.successType];return r._waiter=this,r.response.maxRetries=this.config.maxAttempts,r.addListeners(this.Listeners.retry),n&&r.addListeners(n),t&&r.send(t),r},setError:function(e,r){e.data=null,e.error=t.util.error(e.error||new Error,{code:"ResourceNotReady",message:"Resource is not in the state "+this.state,retryable:r})},checkSuccess:function(e){if(!this.config.successPath)return e.httpResponse.statusCode<300;var r=t.util.jamespath.find(this.config.successPath,e.data);return this.config.failureValue&&this.config.failureValue.indexOf(r)>=0?null:this.expectedValue?r===this.expectedValue:r?!0:!1},checkError:function(e){var t=this.config.successValue;return"number"==typeof t?e.httpResponse.statusCode===t:e.error&&e.error.code===t},loadWaiterConfig:function(e,r){if(!this.service.api.waiters[e]){if(r)return;throw new t.util.error(new Error,{code:"StateNotFoundError",message:"State "+e+" not found."})}this.config=this.service.api.waiters[e];var n=this.config;!function(){n.successType=n.successType||n.acceptorType,n.successPath=n.successPath||n.acceptorPath,n.successValue=n.successValue||n.acceptorValue,n.failureType=n.failureType||n.acceptorType,n.failurePath=n.failurePath||n.acceptorPath,n.failureValue=n.failureValue||n.acceptorValue}()}})},{"./core":3}],32:[function(e){var t=e("./core"),r=t.util.inherit;t.Response=r({constructor:function(e){this.request=e,this.data=null,this.error=null,this.retryCount=0,this.redirectCount=0,this.httpResponse=new t.HttpResponse,e&&(this.maxRetries=e.service.numRetries(),this.maxRedirects=e.service.config.maxRedirects)},nextPage:function(e){var r,n=this.request.service,i=this.request.operation;try{r=n.paginationConfig(i,!0)}catch(o){this.error=o}if(!this.hasNextPage()){if(e)e(this.error,null);else if(this.error)throw this.error;return null}var a=t.util.copy(this.request.params);if(this.nextPageTokens){var s=r.inputToken;"string"==typeof s&&(s=[s]);for(var u=0;u<s.length;u++)a[s[u]]=this.nextPageTokens[u];return n.makeRequest(this.request.operation,a,e)}return e?e(null,null):null},hasNextPage:function(){return this.cacheNextPageTokens(),this.nextPageTokens?!0:void 0===this.nextPageTokens?void 0:!1},cacheNextPageTokens:function(){if(this.hasOwnProperty("nextPageTokens"))return this.nextPageTokens;this.nextPageTokens=void 0;var e=this.request.service.paginationConfig(this.request.operation);if(!e)return this.nextPageTokens;if(this.nextPageTokens=null,e.moreResults&&!t.util.jamespath.find(e.moreResults,this.data))return this.nextPageTokens;var r=e.outputToken;return"string"==typeof r&&(r=[r]),t.util.arrayEach.call(this,r,function(e){var r=t.util.jamespath.find(e,this.data);r&&(this.nextPageTokens=this.nextPageTokens||[],this.nextPageTokens.push(r))}),this.nextPageTokens}})},{"./core":3}],33:[function(e,t){var r=e("../core"),n=r.util.string.byteLength;r.S3.ManagedUpload=r.util.inherit({constructor:function(e){var t=this;r.SequentialExecutor.call(t),t.body=null,t.sliceFn=null,t.callback=null,t.parts={},t.completeInfo=[],t.fillQueue=function(){t.callback(new Error("Unsupported body payload "+typeof t.body))},t.configure(e)},configure:function(e){if(e=e||{},this.partSize=this.minPartSize,e.queueSize&&(this.queueSize=e.queueSize),e.partSize&&(this.partSize=e.partSize),e.leavePartsOnError&&(this.leavePartsOnError=!0),this.partSize<this.minPartSize)throw new Error("partSize must be greater than "+this.minPartSize);this.service=e.service,this.bindServiceObject(e.params),this.validateBody(),this.adjustTotalBytes()},leavePartsOnError:!1,queueSize:4,partSize:null,minPartSize:5242880,maxTotalParts:1e4,send:function(e){var t=this;t.callback=e||function(e){if(e)throw e};var n=!0;if(t.sliceFn)t.fillQueue=t.fillBuffer;else if(r.util.isNode()){var i=r.util.nodeRequire("stream").Stream;t.body instanceof i&&(n=!1,t.fillQueue=t.fillStream,t.partBuffer=new r.util.Buffer(0),t.body.on("readable",function(){t.fillQueue()}).on("end",function(){t.isDoneChunking=!0,t.numParts=t.totalPartNumbers,t.fillQueue.call(t)}))}n&&t.fillQueue.call(t)},abort:function(){this.cleanup(r.util.error(new Error("Request aborted by user"),{code:"RequestAbortedError",retryable:!1}))},validateBody:function(){var e=this;if(e.body=e.service.config.params.Body,!e.body)throw new Error("params.Body is required");"string"==typeof e.body&&(e.body=new r.util.Buffer(e.body)),e.sliceFn=r.util.arraySliceFn(e.body)},bindServiceObject:function(e){e=e||{};var t=this;if(t.service){var n=r.util.copy(t.service.config);t.service=new t.service.constructor.__super__(n),t.service.config.params=r.util.merge(t.service.config.params||{},e)}else t.service=new r.S3({params:e})},adjustTotalBytes:function(){var e=this;try{e.totalBytes=n(e.body)}catch(t){}if(e.totalBytes){var r=Math.ceil(e.totalBytes/e.maxTotalParts);r>e.partSize&&(e.partSize=r)}else e.totalBytes=void 0},isDoneChunking:!1,partPos:0,totalChunkedBytes:0,totalUploadedBytes:0,totalBytes:void 0,numParts:0,totalPartNumbers:0,activeParts:0,doneParts:0,parts:null,completeInfo:null,failed:!1,multipartReq:null,partBuffer:null,fillBuffer:function(){for(var e=this,t=n(e.body);e.activeParts<e.queueSize&&e.partPos<t;){var r=Math.min(e.partPos+e.partSize,t),i=e.sliceFn.call(e.body,e.partPos,r);e.partPos+=e.partSize,(n(i)<e.partSize||e.partPos===t)&&(e.isDoneChunking=!0,e.numParts=e.totalPartNumbers+1),e.nextChunk(i)}},fillStream:function(){var e=this;if(!(e.activeParts>=e.queueSize)){var t=e.body.read(e.partSize-e.partBuffer.length)||e.body.read();t&&(e.partBuffer=r.util.Buffer.concat([e.partBuffer,t]),e.totalChunkedBytes+=t.length),e.partBuffer.length>=e.partSize?(e.nextChunk(e.partBuffer.slice(0,e.partSize)),e.partBuffer=e.partBuffer.slice(e.partSize)):e.isDoneChunking&&(e.totalBytes=e.totalChunkedBytes,e.partBuffer.length>0&&(e.numParts++,e.nextChunk(e.partBuffer)),e.partBuffer=new r.util.Buffer(0)),e.body.read(0)}},nextChunk:function(e){var t=this;if(t.failed)return null;var r=++t.totalPartNumbers;if(t.isDoneChunking&&1===r){var n=t.service.putObject({Body:e});return n._managedUpload=t,n.on("httpUploadProgress",t.progress).send(t.finishSinglePart),null}t.activeParts++,t.service.config.params.UploadId?t.uploadPart(e,r):t.multipartReq?t.queueChunks(e,r):(t.multipartReq=t.service.createMultipartUpload(),t.multipartReq.on("success",function(e){t.service.config.params.UploadId=e.data.UploadId,t.multipartReq=null}),t.queueChunks(e,r),t.multipartReq.on("error",function(e){t.cleanup(e)}),t.multipartReq.send())},uploadPart:function(e,t){var n=this,i={Body:e,ContentLength:r.util.string.byteLength(e),PartNumber:t},o={ETag:null,PartNumber:t};n.completeInfo.push(o);var a=n.service.uploadPart(i);n.parts[t]=a,a._lastUploadedBytes=0,a._managedUpload=n,a.on("httpUploadProgress",n.progress),a.send(function(e,t){if(delete n.parts[i.PartNumber],n.activeParts--,!(e||t&&t.ETag)){var a="No access to ETag property on response.";r.util.isBrowser()&&(a+=" Check CORS configuration to expose ETag header."),e=r.util.error(new Error(a),{code:"ETagMissing",retryable:!1})}return e?n.cleanup(e):(o.ETag=t.ETag,n.doneParts++,void(n.isDoneChunking&&n.doneParts===n.numParts?n.finishMultiPart():n.fillQueue.call(n)))})},queueChunks:function(e,t){var r=this;r.multipartReq.on("success",function(){r.uploadPart(e,t)})},cleanup:function(e){var t=this;t.failed||("function"==typeof t.body.removeAllListeners&&"function"==typeof t.body.resume&&(t.body.removeAllListeners("readable"),t.body.removeAllListeners("end"),t.body.resume()),t.service.config.params.UploadId&&!t.leavePartsOnError&&t.service.abortMultipartUpload().send(),r.util.each(t.parts,function(e,t){t.removeAllListeners("complete"),t.abort()}),t.parts={},t.callback(e),t.failed=!0)},finishMultiPart:function(){var e=this,t={MultipartUpload:{Parts:e.completeInfo}};e.service.completeMultipartUpload(t,function(t,r){return t?e.cleanup(t):void e.callback(t,r)})},finishSinglePart:function(e,t){var n=this.request._managedUpload,i=this.request.httpRequest,o=r.util.urlFormat(i.endpoint);return e?n.callback(e):(t.Location=o.substr(0,o.length-1)+i.path,void n.callback(e,t))},progress:function(e){var t=this._managedUpload;"putObject"===this.operation?e.part=1:(t.totalUploadedBytes+=e.loaded-this._lastUploadedBytes,this._lastUploadedBytes=e.loaded,e={loaded:t.totalUploadedBytes,total:t.totalBytes,part:this.params.PartNumber}),t.emit("httpUploadProgress",[e])}}),r.util.mixin(r.S3.ManagedUpload,r.SequentialExecutor),t.exports=r.S3.ManagedUpload},{"../core":3}],34:[function(e,t){var r=e("./core");r.SequentialExecutor=r.util.inherit({constructor:function(){this._events={}},listeners:function(e){return this._events[e]?this._events[e].slice(0):[]},on:function(e,t){return this._events[e]?this._events[e].push(t):this._events[e]=[t],this},onAsync:function(e,t){return t._isAsync=!0,this.on(e,t)},removeListener:function(e,t){var r=this._events[e];if(r){for(var n=r.length,i=-1,o=0;n>o;++o)r[o]===t&&(i=o);i>-1&&r.splice(i,1)}return this},removeAllListeners:function(e){return e?delete this._events[e]:this._events={},this},emit:function(e,t,r){r||(r=function(){});var n=this.listeners(e),i=n.length;return this.callListeners(n,t,r),i>0},callListeners:function(e,t,r){function n(n){n?r.call(i,n):i.callListeners(e,t,r)}for(var i=this;e.length>0;){var o=e.shift();if(o._isAsync)return void o.apply(i,t.concat([n]));o.apply(i,t)}r.call(i)},addListeners:function(e){var t=this;return e._events&&(e=e._events),r.util.each(e,function(e,n){"function"==typeof n&&(n=[n]),r.util.arrayEach(n,function(r){t.on(e,r)})}),t},addNamedListener:function(e,t,r){return this[e]=r,this.addListener(t,r),this},addNamedAsyncListener:function(e,t,r){return r._isAsync=!0,this.addNamedListener(e,t,r)},addNamedListeners:function(e){var t=this;return e(function(){t.addNamedListener.apply(t,arguments)},function(){t.addNamedAsyncListener.apply(t,arguments)}),this}}),r.SequentialExecutor.prototype.addListener=r.SequentialExecutor.prototype.on,t.exports=r.SequentialExecutor},{"./core":3}],35:[function(e){var t=e("./core"),r=e("./model/api"),n=e("./region_config"),i=t.util.inherit;t.Service=i({constructor:function(e){if(!this.loadServiceClass)throw t.util.error(new Error,"Service must be constructed with `new' operator");var r=this.loadServiceClass(e||{});return r?new r(e):void this.initialize(e)},initialize:function(e){var r=t.config[this.serviceIdentifier];this.config=new t.Config(t.config),r&&this.config.update(r,!0),e&&this.config.update(e,!0),this.validateService(),this.config.endpoint||n(this),this.config.endpoint=this.endpointFromTemplate(this.config.endpoint),this.setEndpoint(this.config.endpoint)},validateService:function(){},loadServiceClass:function(e){var r=e;if(t.util.isEmpty(this.api)){if(r.apiConfig)return t.Service.defineServiceApi(this.constructor,r.apiConfig);if(this.constructor.services){r=new t.Config(t.config),r.update(e,!0);var n=r.apiVersions[this.constructor.serviceIdentifier];return n=n||r.apiVersion,this.getLatestServiceClass(n)}return null}return null},getLatestServiceClass:function(e){return e=this.getLatestServiceVersion(e),null===this.constructor.services[e]&&t.Service.defineServiceApi(this.constructor,e),this.constructor.services[e]},getLatestServiceVersion:function(e){if(!this.constructor.services||0===this.constructor.services.length)throw new Error("No services defined on "+this.constructor.serviceIdentifier);if(e?t.util.isType(e,Date)&&(e=t.util.date.iso8601(e).split("T")[0]):e="latest",Object.hasOwnProperty(this.constructor.services,e))return e;for(var r=Object.keys(this.constructor.services).sort(),n=null,i=r.length-1;i>=0;i--)if("*"!==r[i][r[i].length-1]&&(n=r[i]),r[i].substr(0,10)<=e)return n;throw new Error("Could not find "+this.constructor.serviceIdentifier+" API to satisfy version constraint `"+e+"'")},api:{},defaultRetryCount:3,makeRequest:function(e,r,n){if("function"==typeof r&&(n=r,r=null),r=r||{},this.config.params){var i=this.api.operations[e];i&&(r=t.util.copy(r),t.util.each(this.config.params,function(e,t){i.input.members[e]&&(void 0===r[e]||null===r[e])&&(r[e]=t)}))}var o=new t.Request(this,e,r);return this.addAllRequestListeners(o),n&&o.send(n),o},makeUnauthenticatedRequest:function(e,t,r){"function"==typeof t&&(r=t,t={});var n=this.makeRequest(e,t).toUnauthenticated();return r?n.send(r):n},waitFor:function(e,r,n){var i=new t.ResourceWaiter(this,e);return i.wait(r,n)},addAllRequestListeners:function(e){for(var r=[t.events,t.EventListeners.Core,this.serviceInterface(),t.EventListeners.CorePost],n=0;n<r.length;n++)r[n]&&e.addListeners(r[n]);this.config.paramValidation||e.removeListener("validate",t.EventListeners.Core.VALIDATE_PARAMETERS),this.config.logger&&e.addListeners(t.EventListeners.Logger),this.setupRequestListeners(e)},setupRequestListeners:function(){},getSignerClass:function(){var e;return e=this.config.signatureVersion?this.config.signatureVersion:this.api.signatureVersion,t.Signers.RequestSigner.getVersion(e)},serviceInterface:function(){switch(this.api.protocol){case"ec2":return t.EventListeners.Query;case"query":return t.EventListeners.Query;case"json":return t.EventListeners.Json;case"rest-json":return t.EventListeners.RestJson;case"rest-xml":return t.EventListeners.RestXml}if(this.api.protocol)throw new Error("Invalid service `protocol' "+this.api.protocol+" in API config")},successfulResponse:function(e){return e.httpResponse.statusCode<300},numRetries:function(){return void 0!==this.config.maxRetries?this.config.maxRetries:this.defaultRetryCount},retryDelays:function(){for(var e=this.numRetries(),t=[],r=0;e>r;++r)t[r]=30*Math.pow(2,r);return t},retryableError:function(e){return this.networkingError(e)?!0:this.expiredCredentialsError(e)?!0:this.throttledError(e)?!0:e.statusCode>=500?!0:!1
},networkingError:function(e){return"NetworkingError"===e.code},expiredCredentialsError:function(e){return"ExpiredTokenException"===e.code},throttledError:function(e){switch(e.code){case"ProvisionedThroughputExceededException":case"Throttling":return!0;default:return!1}},endpointFromTemplate:function(e){if("string"!=typeof e)return e;var t=e;return t=t.replace(/\{service\}/g,this.api.endpointPrefix),t=t.replace(/\{region\}/g,this.config.region),t=t.replace(/\{scheme\}/g,this.config.sslEnabled?"https":"http")},setEndpoint:function(e){this.endpoint=new t.Endpoint(e,this.config)},paginationConfig:function(e,r){var n=this.api.operations[e].paginator;if(!n){if(r){var i=new Error;throw t.util.error(i,"No pagination configuration for "+e)}return null}return n}}),t.util.update(t.Service,{defineMethods:function(e){t.util.each(e.prototype.api.operations,function(t){e.prototype[t]||(e.prototype[t]=function(e,r){return this.makeRequest(t,e,r)})})},defineService:function(e,r,n){t.Service._serviceMap[e]=!0,Array.isArray(r)||(n=r,r=[]);var o=i(t.Service,n||{});if("string"==typeof e){t.Service.addVersions(o,r);var a=o.serviceIdentifier||e;o.serviceIdentifier=a}else o.prototype.api=e,t.Service.defineMethods(o);return o},addVersions:function(e,t){Array.isArray(t)||(t=[t]),e.services=e.services||{};for(var r=0;r<t.length;r++)void 0===e.services[t[r]]&&(e.services[t[r]]=null);e.apiVersions=Object.keys(e.services).sort()},defineServiceApi:function(e,n,o){function a(e){s.prototype.api=e.isApi?e:new r(e)}var s=i(e,{serviceIdentifier:e.serviceIdentifier});if("string"==typeof n){if(o)a(o);else try{a(t.apiLoader(e.serviceIdentifier,n))}catch(u){throw t.util.error(u,{message:"Could not find API configuration "+e.serviceIdentifier+"-"+n})}e.services.hasOwnProperty(n)||(e.apiVersions=e.apiVersions.concat(n).sort()),e.services[n]=s}else a(n);return t.Service.defineMethods(s),s},hasService:function(e){return t.Service._serviceMap.hasOwnProperty(e)},_serviceMap:{}})},{"./core":3,"./model/api":15,"./region_config":28}],36:[function(e){var t=e("../core");t.util.update(t.CognitoIdentity.prototype,{getOpenIdToken:function(e,t){return this.makeUnauthenticatedRequest("getOpenIdToken",e,t)},getId:function(e,t){return this.makeUnauthenticatedRequest("getId",e,t)},getCredentialsForIdentity:function(e,t){return this.makeUnauthenticatedRequest("getCredentialsForIdentity",e,t)}})},{"../core":3}],37:[function(e){var t=e("../core");t.util.update(t.DynamoDB.prototype,{setupRequestListeners:function(e){e.service.config.dynamoDbCrc32&&e.addListener("extractData",this.checkCrc32)},checkCrc32:function(e){e.httpResponse.streaming||e.request.service.crc32IsValid(e)||(e.error=t.util.error(new Error,{code:"CRC32CheckFailed",message:"CRC32 integrity check failed",retryable:!0}))},crc32IsValid:function(e){var r=e.httpResponse.headers["x-amz-crc32"];return r?parseInt(r,10)===t.util.crypto.crc32(e.httpResponse.body):!0},defaultRetryCount:10,retryDelays:function(){for(var e=this.numRetries(),t=[],r=0;e>r;++r)t.push(0===r?0:50*Math.pow(2,r-1));return t}})},{"../core":3}],38:[function(e){var t=e("../core");e("../s3/managed_upload"),t.util.update(t.S3.prototype,{validateService:function(){if(this.config.region||(this.config.region="us-east-1"),!this.config.endpoint&&this.config.s3BucketEndpoint){var e="An endpoint must be provided when configuring `s3BucketEndpoint` to true.";throw t.util.error(new Error,{name:"InvalidEndpoint",message:e})}},setupRequestListeners:function(e){e.addListener("validate",this.validateScheme),e.addListener("validate",this.validateBucketEndpoint),e.addListener("build",this.addContentType),e.addListener("build",this.populateURI),e.addListener("build",this.computeContentMd5),e.onAsync("build",this.computeSha256),e.addListener("build",this.computeSseCustomerKeyMd5),e.addListener("afterBuild",this.addExpect100Continue),e.removeListener("validate",t.EventListeners.Core.VALIDATE_REGION),e.addListener("extractError",this.extractError),e.addListener("extractData",this.extractData),e.addListener("beforePresign",this.prepareSignedUrl)},validateScheme:function(e){var r=e.params,n=e.httpRequest.endpoint.protocol,i=r.SSECustomerKey||r.CopySourceSSECustomerKey;if(i&&"https:"!==n){var o="Cannot send SSE keys over HTTP. Set 'sslEnabled'to 'true' in your configuration";throw t.util.error(new Error,{code:"ConfigError",message:o})}},validateBucketEndpoint:function(e){if(!e.params.Bucket&&e.service.config.s3BucketEndpoint){var r="Cannot send requests to root API with `s3BucketEndpoint` set.";throw t.util.error(new Error,{code:"ConfigError",message:r})}},populateURI:function(e){var t=e.httpRequest,r=e.params.Bucket;if(r&&!e.service.pathStyleBucketName(r)){if(!e.service.config.s3BucketEndpoint){t.endpoint.hostname=r+"."+t.endpoint.hostname;var n=t.endpoint.port;t.endpoint.host=80!==n&&443!==n?t.endpoint.hostname+":"+t.endpoint.port:t.endpoint.hostname}t.virtualHostedBucket=r,t.path=t.path.replace(new RegExp("/"+r),""),"/"!==t.path[0]&&(t.path="/"+t.path)}},addExpect100Continue:function(e){var r=e.httpRequest.headers["Content-Length"];t.util.isNode()&&r>=1048576&&(e.httpRequest.headers.Expect="100-continue")},addContentType:function(e){var r=e.httpRequest;if("GET"===r.method||"HEAD"===r.method)return void delete r.headers["Content-Type"];r.headers["Content-Type"]||(r.headers["Content-Type"]="application/octet-stream");var n=r.headers["Content-Type"];if(t.util.isBrowser())if("string"!=typeof r.body||n.match(/;\s*charset=/)){var i=function(e,t,r){return t+r.toUpperCase()};r.headers["Content-Type"]=n.replace(/(;\s*charset=)(.+)$/,i)}else{var o="; charset=UTF-8";r.headers["Content-Type"]+=o}},computableChecksumOperations:{putBucketCors:!0,putBucketLifecycle:!0,putBucketTagging:!0,deleteObjects:!0},willComputeChecksums:function(e){if(this.computableChecksumOperations[e.operation])return!0;if(!this.config.computeChecksums)return!1;if(!t.util.Buffer.isBuffer(e.httpRequest.body)&&"string"!=typeof e.httpRequest.body)return!1;var r=e.service.api.operations[e.operation].input.members;return e.service.getSignerClass(e)===t.Signers.V4&&r.ContentMD5&&!r.ContentMD5.required?!1:r.ContentMD5&&!e.params.ContentMD5?!0:void 0},computeContentMd5:function(e){if(e.service.willComputeChecksums(e)){var r=t.util.crypto.md5(e.httpRequest.body,"base64");e.httpRequest.headers["Content-MD5"]=r}},computeSha256:function(e,r){if(e.service.getSignerClass(e)===t.Signers.V4){var n=e.httpRequest.body||"";if(t.util.isNode()){var i=t.util.nodeRequire("stream").Stream,o=t.util.nodeRequire("fs");if(n instanceof i){if("string"!=typeof n.path)return void r(new Error("Non-file stream objects are not supported with SigV4 in AWS.S3"));n=o.createReadStream(n.path)}}t.util.crypto.sha256(n,"hex",function(t,n){t||(e.httpRequest.headers["X-Amz-Content-Sha256"]=n),r(t)})}else r()},computeSseCustomerKeyMd5:function(e){var r=["x-amz-server-side-encryption-customer-key","x-amz-copy-source-server-side-encryption-customer-key"];t.util.arrayEach(r,function(r){if(e.httpRequest.headers[r]){var n=e.httpRequest.headers[r],i=r+"-MD5";if(e.httpRequest.headers[r]=t.util.base64.encode(n),!e.httpRequest.headers[i]){var o=t.util.crypto.md5(n,"base64");e.httpRequest.headers[i]=o}}})},pathStyleBucketName:function(e){return this.config.s3ForcePathStyle?!0:this.config.s3BucketEndpoint?!1:this.dnsCompatibleBucketName(e)?this.config.sslEnabled&&e.match(/\./)?!0:!1:!0},dnsCompatibleBucketName:function(e){var t=e,r=new RegExp(/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/),n=new RegExp(/(\d+\.){3}\d+/),i=new RegExp(/\.\./);return!t.match(r)||t.match(n)||t.match(i)?!1:!0},successfulResponse:function(e){var t=e.request,r=e.httpResponse;return"completeMultipartUpload"===t.operation&&r.body.toString().match("<Error>")?!1:r.statusCode<300},retryableError:function(e,r){if("completeMultipartUpload"===r.operation&&200===e.statusCode)return!0;if(e&&"RequestTimeout"===e.code)return!0;var n=t.Service.prototype.retryableError;return n.call(this,e,r)},extractData:function(e){var t=e.request;if("getBucketLocation"===t.operation){var r=e.httpResponse.body.toString().match(/>(.+)<\/Location/);r&&(delete e.data._,e.data.LocationConstraint=r[1])}},extractError:function(e){var r={304:"NotModified",403:"Forbidden",400:"BadRequest",404:"NotFound"},n=e.httpResponse.statusCode,i=e.httpResponse.body||"";if(r[n]&&0===i.length)e.error=t.util.error(new Error,{code:r[e.httpResponse.statusCode],message:null});else{var o=(new t.XML.Parser).parse(i.toString());e.error=t.util.error(new Error,{code:o.Code||n,message:o.Message||null})}},getSignedUrl:function(e,r,n){r=t.util.copy(r||{});var i=r.Expires||900;delete r.Expires;var o=this.makeRequest(e,r);return o.presign(i,n)},prepareSignedUrl:function(e){e.addListener("validate",e.service.noPresignedContentLength),e.removeListener("build",e.service.addContentType),e.params.Body||(e.removeListener("build",e.service.computeContentMd5),e.removeListener("build",e.service.computeSha256))},noPresignedContentLength:function(e){if(void 0!==e.params.ContentLength)throw t.util.error(new Error,{code:"UnexpectedParameter",message:"ContentLength is not supported in pre-signed URLs."})},createBucket:function(e,t){e||(e={});var r=this.endpoint.hostname;return r===this.api.globalEndpoint||e.CreateBucketConfiguration||(e.CreateBucketConfiguration={LocationConstraint:this.config.region}),this.makeRequest("createBucket",e,t)},upload:function(e,r,n){"function"==typeof r&&void 0===n&&(n=r,r=null),r=r||{},r=t.util.merge(r||{},{service:this,params:e});var i=new t.S3.ManagedUpload(r);return"function"==typeof n&&i.send(n),i}})},{"../core":3,"../s3/managed_upload":33}],39:[function(e){var t=e("../core");t.util.update(t.SQS.prototype,{setupRequestListeners:function(e){e.addListener("build",this.buildEndpoint),e.service.config.computeChecksums&&("sendMessage"===e.operation?e.addListener("extractData",this.verifySendMessageChecksum):"sendMessageBatch"===e.operation?e.addListener("extractData",this.verifySendMessageBatchChecksum):"receiveMessage"===e.operation&&e.addListener("extractData",this.verifyReceiveMessageChecksum))},verifySendMessageChecksum:function(e){if(e.data){var t=e.data.MD5OfMessageBody,r=this.params.MessageBody,n=this.service.calculateChecksum(r);if(n!==t){var i='Got "'+e.data.MD5OfMessageBody+'", expecting "'+n+'".';this.service.throwInvalidChecksumError(e,[e.data.MessageId],i)}}},verifySendMessageBatchChecksum:function(e){if(e.data){var r=this.service,n={},i=[],o=[];t.util.arrayEach(e.data.Successful,function(e){n[e.Id]=e}),t.util.arrayEach(this.params.Entries,function(e){if(n[e.Id]){var t=n[e.Id].MD5OfMessageBody,a=e.MessageBody;r.isChecksumValid(t,a)||(i.push(e.Id),o.push(n[e.Id].MessageId))}}),i.length>0&&r.throwInvalidChecksumError(e,o,"Invalid messages: "+i.join(", "))}},verifyReceiveMessageChecksum:function(e){if(e.data){var r=this.service,n=[];t.util.arrayEach(e.data.Messages,function(e){var t=e.MD5OfBody,i=e.Body;r.isChecksumValid(t,i)||n.push(e.MessageId)}),n.length>0&&r.throwInvalidChecksumError(e,n,"Invalid messages: "+n.join(", "))}},throwInvalidChecksumError:function(e,r,n){e.error=t.util.error(new Error,{retryable:!0,code:"InvalidChecksum",messageIds:r,message:e.request.operation+" returned an invalid MD5 response. "+n})},isChecksumValid:function(e,t){return this.calculateChecksum(t)===e},calculateChecksum:function(e){return t.util.crypto.md5(e,"hex")},buildEndpoint:function(e){var r=e.httpRequest.params.QueueUrl;if(r){e.httpRequest.endpoint=new t.Endpoint(r);var n=e.httpRequest.endpoint.host.match(/^sqs\.(.+?)\./);n&&(e.httpRequest.region=n[1])}}})},{"../core":3}],40:[function(e){var t=e("../core");t.util.update(t.STS.prototype,{credentialsFrom:function(e,r){return e?(r||(r=new t.TemporaryCredentials),r.expired=!1,r.accessKeyId=e.Credentials.AccessKeyId,r.secretAccessKey=e.Credentials.SecretAccessKey,r.sessionToken=e.Credentials.SessionToken,r.expireTime=e.Credentials.Expiration,r):null},assumeRoleWithWebIdentity:function(e,t){return this.makeUnauthenticatedRequest("assumeRoleWithWebIdentity",e,t)},assumeRoleWithSAML:function(e,t){return this.makeUnauthenticatedRequest("assumeRoleWithSAML",e,t)}})},{"../core":3}],41:[function(e,t){function r(e){var t=e.httpRequest.headers[a];if(delete e.httpRequest.headers["User-Agent"],delete e.httpRequest.headers["X-Amz-User-Agent"],e.service.getSignerClass()===i.Signers.V4){if(t>604800){var r="Presigning does not support expiry time greater than a week with SigV4 signing.";throw i.util.error(new Error,{code:"InvalidExpiryTime",message:r,retryable:!1})}e.httpRequest.headers[a]=t}else{if(e.service.getSignerClass()!==i.Signers.S3)throw i.util.error(new Error,{message:"Presigning only supports S3 or SigV4 signing.",code:"UnsupportedSigner",retryable:!1});e.httpRequest.headers[a]=parseInt(i.util.date.unixTimestamp()+t,10).toString()}}function n(e){var t=e.httpRequest.endpoint,r=i.util.urlParse(e.httpRequest.path),n={};r.search&&(n=i.util.queryStringParse(r.search.substr(1))),i.util.each(e.httpRequest.headers,function(e,t){e===a&&(e="Expires"),n[e]=t}),delete e.httpRequest.headers[a];var o=n.Authorization.split(" ");if("AWS"===o[0])o=o[1].split(":"),n.AWSAccessKeyId=o[0],n.Signature=o[1];else if("AWS4-HMAC-SHA256"===o[0]){o.shift();var s=o.join(" "),u=s.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];n["X-Amz-Signature"]=u,delete n.Expires}delete n.Authorization,delete n.Host,t.pathname=r.pathname,t.search=i.util.queryParamsToString(n)}var i=e("../core"),o=i.util.inherit,a="presigned-expires";i.Signers.Presign=o({sign:function(e,t,o){if(e.httpRequest.headers[a]=t||3600,e.on("build",r),e.on("sign",n),e.removeListener("afterBuild",i.EventListeners.Core.SET_CONTENT_LENGTH),e.emit("beforePresign",[e]),!o){if(e.build(),e.response.error)throw e.response.error;return i.util.urlFormat(e.httpRequest.endpoint)}e.build(function(){this.response.error?o(this.response.error):o(null,i.util.urlFormat(e.httpRequest.endpoint))})}}),t.exports=i.Signers.Presign},{"../core":3}],42:[function(e){var t=e("../core"),r=t.util.inherit;t.Signers.RequestSigner=r({constructor:function(e){this.request=e}}),t.Signers.RequestSigner.getVersion=function(e){switch(e){case"v2":return t.Signers.V2;case"v3":return t.Signers.V3;case"v4":return t.Signers.V4;case"s3":return t.Signers.S3;case"v3https":return t.Signers.V3Https}throw new Error("Unknown signing version "+e)},e("./v2"),e("./v3"),e("./v3https"),e("./v4"),e("./s3"),e("./presign")},{"../core":3,"./presign":41,"./s3":43,"./v2":44,"./v3":45,"./v3https":46,"./v4":47}],43:[function(e,t){var r=e("../core"),n=r.util.inherit;r.Signers.S3=n(r.Signers.RequestSigner,{subResources:{acl:1,cors:1,lifecycle:1,"delete":1,location:1,logging:1,notification:1,partNumber:1,policy:1,requestPayment:1,restore:1,tagging:1,torrent:1,uploadId:1,uploads:1,versionId:1,versioning:1,versions:1,website:1},responseHeaders:{"response-content-type":1,"response-content-language":1,"response-expires":1,"response-cache-control":1,"response-content-disposition":1,"response-content-encoding":1},addAuthorization:function(e,t){this.request.headers["presigned-expires"]||(this.request.headers["X-Amz-Date"]=r.util.date.rfc822(t)),e.sessionToken&&(this.request.headers["x-amz-security-token"]=e.sessionToken);var n=this.sign(e.secretAccessKey,this.stringToSign()),i="AWS "+e.accessKeyId+":"+n;this.request.headers.Authorization=i},stringToSign:function(){var e=this.request,t=[];t.push(e.method),t.push(e.headers["Content-MD5"]||""),t.push(e.headers["Content-Type"]||""),t.push(e.headers["presigned-expires"]||"");var r=this.canonicalizedAmzHeaders();return r&&t.push(r),t.push(this.canonicalizedResource()),t.join("\n")},canonicalizedAmzHeaders:function(){var e=[];r.util.each(this.request.headers,function(t){t.match(/^x-amz-/i)&&e.push(t)}),e.sort(function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:1});var t=[];return r.util.arrayEach.call(this,e,function(e){t.push(e.toLowerCase()+":"+String(this.request.headers[e]))}),t.join("\n")},canonicalizedResource:function(){var e=this.request,t=e.path.split("?"),n=t[0],i=t[1],o="";if(e.virtualHostedBucket&&(o+="/"+e.virtualHostedBucket),o+=n,i){var a=[];r.util.arrayEach.call(this,i.split("&"),function(e){var t=e.split("=")[0],r=e.split("=")[1];if(this.subResources[t]||this.responseHeaders[t]){var n={name:t};void 0!==r&&(n.value=this.subResources[t]?r:decodeURIComponent(r)),a.push(n)}}),a.sort(function(e,t){return e.name<t.name?-1:1}),a.length&&(i=[],r.util.arrayEach(a,function(e){i.push(void 0===e.value?e.name:e.name+"="+e.value)}),o+="?"+i.join("&"))}return o},sign:function(e,t){return r.util.crypto.hmac(e,t,"base64","sha1")}}),t.exports=r.Signers.S3},{"../core":3}],44:[function(e,t){var r=e("../core"),n=r.util.inherit;r.Signers.V2=n(r.Signers.RequestSigner,{addAuthorization:function(e,t){t||(t=r.util.date.getDate());var n=this.request;n.params.Timestamp=r.util.date.iso8601(t),n.params.SignatureVersion="2",n.params.SignatureMethod="HmacSHA256",n.params.AWSAccessKeyId=e.accessKeyId,e.sessionToken&&(n.params.SecurityToken=e.sessionToken),delete n.params.Signature,n.params.Signature=this.signature(e),n.body=r.util.queryParamsToString(n.params),n.headers["Content-Length"]=n.body.length},signature:function(e){return r.util.crypto.hmac(e.secretAccessKey,this.stringToSign(),"base64")},stringToSign:function(){var e=[];return e.push(this.request.method),e.push(this.request.endpoint.host.toLowerCase()),e.push(this.request.pathname()),e.push(r.util.queryParamsToString(this.request.params)),e.join("\n")}}),t.exports=r.Signers.V2},{"../core":3}],45:[function(e,t){var r=e("../core"),n=r.util.inherit;r.Signers.V3=n(r.Signers.RequestSigner,{addAuthorization:function(e,t){var n=r.util.date.rfc822(t);this.request.headers["X-Amz-Date"]=n,e.sessionToken&&(this.request.headers["x-amz-security-token"]=e.sessionToken),this.request.headers["X-Amzn-Authorization"]=this.authorization(e,n)},authorization:function(e){return"AWS3 AWSAccessKeyId="+e.accessKeyId+",Algorithm=HmacSHA256,SignedHeaders="+this.signedHeaders()+",Signature="+this.signature(e)},signedHeaders:function(){var e=[];return r.util.arrayEach(this.headersToSign(),function(t){e.push(t.toLowerCase())}),e.sort().join(";")},canonicalHeaders:function(){var e=this.request.headers,t=[];return r.util.arrayEach(this.headersToSign(),function(r){t.push(r.toLowerCase().trim()+":"+String(e[r]).trim())}),t.sort().join("\n")+"\n"},headersToSign:function(){var e=[];return r.util.each(this.request.headers,function(t){("Host"===t||"Content-Encoding"===t||t.match(/^X-Amz/i))&&e.push(t)}),e},signature:function(e){return r.util.crypto.hmac(e.secretAccessKey,this.stringToSign(),"base64")},stringToSign:function(){var e=[];return e.push(this.request.method),e.push("/"),e.push(""),e.push(this.canonicalHeaders()),e.push(this.request.body),r.util.crypto.sha256(e.join("\n"))}}),t.exports=r.Signers.V3},{"../core":3}],46:[function(e,t){var r=e("../core"),n=r.util.inherit;e("./v3"),r.Signers.V3Https=n(r.Signers.V3,{authorization:function(e){return"AWS3-HTTPS AWSAccessKeyId="+e.accessKeyId+",Algorithm=HmacSHA256,Signature="+this.signature(e)},stringToSign:function(){return this.request.headers["X-Amz-Date"]}}),t.exports=r.Signers.V3Https},{"../core":3,"./v3":45}],47:[function(e,t){var r=e("../core"),n=r.util.inherit,i={},o="presigned-expires";r.Signers.V4=n(r.Signers.RequestSigner,{constructor:function(e,t){r.Signers.RequestSigner.call(this,e),this.serviceName=t},algorithm:"AWS4-HMAC-SHA256",addAuthorization:function(e,t){var n=r.util.date.iso8601(t).replace(/[:\-]|\.\d{3}/g,"");this.isPresigned()?this.updateForPresigned(e,n):this.addHeaders(e,n),this.request.headers.Authorization=this.authorization(e,n)},addHeaders:function(e,t){this.request.headers["X-Amz-Date"]=t,e.sessionToken&&(this.request.headers["x-amz-security-token"]=e.sessionToken)},updateForPresigned:function(e,t){var n=this.credentialString(t),i={"X-Amz-Date":t,"X-Amz-Algorithm":this.algorithm,"X-Amz-Credential":e.accessKeyId+"/"+n,"X-Amz-Expires":this.request.headers[o],"X-Amz-SignedHeaders":this.signedHeaders()};e.sessionToken&&(i["X-Amz-Security-Token"]=e.sessionToken),this.request.headers["Content-Type"]&&(i["Content-Type"]=this.request.headers["Content-Type"]),r.util.each.call(this,this.request.headers,function(e,t){e!==o&&this.isSignableHeader(e)&&0===e.toLowerCase().indexOf("x-amz-")&&(i[e]=t)});var a=this.request.path.indexOf("?")>=0?"&":"?";this.request.path+=a+r.util.queryParamsToString(i)},authorization:function(e,t){var r=[],n=this.credentialString(t);return r.push(this.algorithm+" Credential="+e.accessKeyId+"/"+n),r.push("SignedHeaders="+this.signedHeaders()),r.push("Signature="+this.signature(e,t)),r.join(", ")},signature:function(e,t){var n=i[this.serviceName],o=t.substr(0,8);if(!n||n.akid!==e.accessKeyId||n.region!==this.request.region||n.date!==o){var a=e.secretAccessKey,s=r.util.crypto.hmac("AWS4"+a,o,"buffer"),u=r.util.crypto.hmac(s,this.request.region,"buffer"),c=r.util.crypto.hmac(u,this.serviceName,"buffer"),p=r.util.crypto.hmac(c,"aws4_request","buffer");i[this.serviceName]={region:this.request.region,date:o,key:p,akid:e.accessKeyId}}var l=i[this.serviceName].key;return r.util.crypto.hmac(l,this.stringToSign(t),"hex")},stringToSign:function(e){var t=[];return t.push("AWS4-HMAC-SHA256"),t.push(e),t.push(this.credentialString(e)),t.push(this.hexEncodedHash(this.canonicalString())),t.join("\n")},canonicalString:function(){var e=[],t=this.request.pathname();return"s3"!==this.serviceName&&(t=r.util.uriEscapePath(t)),e.push(this.request.method),e.push(t),e.push(this.request.search()),e.push(this.canonicalHeaders()+"\n"),e.push(this.signedHeaders()),e.push(this.hexEncodedBodyHash()),e.join("\n")},canonicalHeaders:function(){var e=[];r.util.each.call(this,this.request.headers,function(t,r){e.push([t,r])}),e.sort(function(e,t){return e[0].toLowerCase()<t[0].toLowerCase()?-1:1});var t=[];return r.util.arrayEach.call(this,e,function(e){var r=e[0].toLowerCase();this.isSignableHeader(r)&&t.push(r+":"+this.canonicalHeaderValues(e[1].toString()))}),t.join("\n")},canonicalHeaderValues:function(e){return e.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")},signedHeaders:function(){var e=[];return r.util.each.call(this,this.request.headers,function(t){t=t.toLowerCase(),this.isSignableHeader(t)&&e.push(t)}),e.sort().join(";")},credentialString:function(e){var t=[];return t.push(e.substr(0,8)),t.push(this.request.region),t.push(this.serviceName),t.push("aws4_request"),t.join("/")},hexEncodedHash:function(e){return r.util.crypto.sha256(e,"hex")},hexEncodedBodyHash:function(){return this.isPresigned()&&"s3"===this.serviceName?"UNSIGNED-PAYLOAD":this.request.headers["X-Amz-Content-Sha256"]?this.request.headers["X-Amz-Content-Sha256"]:this.hexEncodedHash(this.request.body||"")},unsignableHeaders:["authorization","content-type","content-length","user-agent",o],isSignableHeader:function(e){return 0===e.toLowerCase().indexOf("x-amz-")?!0:this.unsignableHeaders.indexOf(e)<0},isPresigned:function(){return this.request.headers[o]?!0:!1}}),t.exports=r.Signers.V4},{"../core":3}],48:[function(e,t){function r(e,t){this.currentState=t||null,this.states=e||{}}r.prototype.runTo=function(e,t,r,n){"function"==typeof e&&(n=r,r=t,t=e,e=null);var i=this,o=i.states[i.currentState];o.fn.call(r||i,n,function(n){if(n){if(!o.fail)return t?t.call(r,n):null;i.currentState=o.fail}else{if(!o.accept)return t?t.call(r):null;i.currentState=o.accept}return i.currentState===e?t?t.call(r,n):null:void i.runTo(e,t,r,n)})},r.prototype.addState=function(e,t,r,n){return"function"==typeof t?(n=t,t=null,r=null):"function"==typeof r&&(n=r,r=null),this.currentState||(this.currentState=e),this.states[e]={accept:t,fail:r,fn:n},this},t.exports=r},{}],49:[function(e,t){(function(r){var n,i=e("crypto"),o=e("buffer").Buffer,a={engine:function(){return a.isBrowser()&&"undefined"!=typeof navigator?navigator.userAgent:r.platform+"/"+r.version},userAgent:function(){var t=a.isBrowser()?"js":"nodejs",r="aws-sdk-"+t+"/"+e("./core").VERSION;return"nodejs"===t&&(r+=" "+a.engine()),r},isBrowser:function(){return r&&r.browser},isNode:function(){return!a.isBrowser()},nodeRequire:function(t){return a.isNode()?e(t):void 0},multiRequire:function(t,r){return e(a.isNode()?t:r)},uriEscape:function(e){var t=encodeURIComponent(e);return t=t.replace(/[^A-Za-z0-9_.~\-%]+/g,escape),t=t.replace(/[*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})},uriEscapePath:function(e){var t=[];return a.arrayEach(e.split("/"),function(e){t.push(a.uriEscape(e))}),t.join("/")},urlParse:function(t){return e("url").parse(t)},urlFormat:function(t){return e("url").format(t)},queryStringParse:function(t){return e("querystring").parse(t)},queryParamsToString:function(e){var t=[],r=a.uriEscape,n=Object.keys(e).sort();return a.arrayEach(n,function(n){var i=e[n],o=r(n),s=o+"=";if(Array.isArray(i)){var u=[];a.arrayEach(i,function(e){u.push(r(e))}),s=o+"="+u.sort().join("&"+o+"=")}else void 0!==i&&null!==i&&(s=o+"="+r(i));t.push(s)}),t.join("&")},readFileSync:function(e){return"undefined"!=typeof window?null:a.nodeRequire("fs").readFileSync(e,"utf-8")},base64:{encode:function(e){return new o(e).toString("base64")},decode:function(e){return new o(e,"base64")}},Buffer:o,buffer:{toStream:function(e){a.Buffer.isBuffer(e)||(e=new a.Buffer(e));var t=new(a.nodeRequire("stream").Readable),r=0;return t._read=function(n){if(r>=e.length)return t.push(null);var i=r+n;i>e.length&&(i=e.length),t.push(e.slice(r,i)),r=i},t},concat:function(e){var t,r=0,n=0,i=null;for(t=0;t<e.length;t++)r+=e[t].length;for(i=new o(r),t=0;t<e.length;t++)e[t].copy(i,n),n+=e[t].length;return i}},string:{byteLength:function(e){if(null===e||void 0===e)return 0;if("string"==typeof e&&(e=new o(e)),"number"==typeof e.byteLength)return e.byteLength;if("number"==typeof e.length)return e.length;if("number"==typeof e.size)return e.size;if("string"==typeof e.path)return a.nodeRequire("fs").lstatSync(e.path).size;throw a.error(new Error("Cannot determine length of "+e),{object:e})},upperFirst:function(e){return e[0].toUpperCase()+e.substr(1)},lowerFirst:function(e){return e[0].toLowerCase()+e.substr(1)}},ini:{parse:function(e){var t,r={};return a.arrayEach(e.split(/\r?\n/),function(e){e=e.split(/(^|\s);/)[0];var n=e.match(/^\s*\[([^\[\]]+)\]\s*$/);if(n)t=n[1];else if(t){var i=e.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);i&&(r[t]=r[t]||{},r[t][i[1]]=i[2])}}),r}},fn:{noop:function(){},makeAsync:function(e,t){return t&&t<=e.length?e:function(){var t=Array.prototype.slice.call(arguments,0),r=t.pop(),n=e.apply(null,t);r(n)}}},jamespath:{query:function(e,t){if(!t)return[];var r=[],n=e.split(/\s+\|\|\s+/);return a.arrayEach.call(this,n,function(e){var n=[t],i=e.split(".");return a.arrayEach.call(this,i,function(e){var t=e.match("^(.+?)(?:\\[(-?\\d+|\\*|)\\])?$"),r=[];return a.arrayEach.call(this,n,function(e){"*"===t[1]?a.arrayEach.call(this,e,function(e){r.push(e)}):e.hasOwnProperty(t[1])&&r.push(e[t[1]])}),n=r,void 0!==t[2]&&(r=[],a.arrayEach.call(this,n,function(e){if(Array.isArray(e))if("*"===t[2]||""===t[2])r=r.concat(e);else{var n=parseInt(t[2],10);0>n&&(n=e.length+n),r.push(e[n])}}),n=r),0===n.length?a.abort:void 0}),n.length>0?(r=n,a.abort):void 0}),r},find:function(e,t){return a.jamespath.query(e,t)[0]}},date:{getDate:function(){return n||(n=e("./core")),n.config.systemClockOffset?new Date((new Date).getTime()+n.config.systemClockOffset):new Date},iso8601:function(e){return void 0===e&&(e=a.date.getDate()),e.toISOString()},rfc822:function(e){return void 0===e&&(e=a.date.getDate()),e.toUTCString()},unixTimestamp:function(e){return void 0===e&&(e=a.date.getDate()),e.getTime()/1e3},from:function(e){return new Date("number"==typeof e?1e3*e:e)},format:function(e,t){return t||(t="iso8601"),a.date[t](a.date.from(e))},parseTimestamp:function(e){if("number"==typeof e)return new Date(1e3*e);if(e.match(/^\d+$/))return new Date(1e3*e);if(e.match(/^\d{4}/))return new Date(e);if(e.match(/^\w{3},/))return new Date(e);throw a.error(new Error("unhandled timestamp format: "+e),{code:"TimestampParserError"})}},crypto:{crc32Table:[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],crc32:function(e){var t=a.crypto.crc32Table,r=-1;"string"==typeof e&&(e=new o(e));for(var n=0;n<e.length;n++){var i=e.readUInt8(n);r=r>>>8^t[255&(r^i)]}return(-1^r)>>>0},hmac:function(e,t,r,n){return r||(r="binary"),"buffer"===r&&(r=void 0),n||(n="sha256"),"string"==typeof t&&(t=new o(t)),i.createHmac(n,e).update(t).digest(r)},md5:function(e,t,r){return a.crypto.hash("md5",e,t,r)},sha256:function(e,t,r){return a.crypto.hash("sha256",e,t,r)},hash:function(e,t,r,n){var i=a.crypto.createHash(e);r||(r="binary"),"buffer"===r&&(r=void 0),"string"==typeof t&&(t=new o(t));var s=a.arraySliceFn(t),u=o.isBuffer(t);if(n&&"object"==typeof t&&"function"==typeof t.on&&!u)t.on("data",function(e){i.update(e)}),t.on("error",function(e){n(e)}),t.on("end",function(){n(null,i.digest(r))});else{if(!n||!s||u||"undefined"==typeof FileReader){a.isBrowser()&&"object"==typeof t&&!u&&(t=new o(new Uint8Array(t)));var c=i.update(t).digest(r);return n&&n(null,c),c}var p=0,l=524288,m=new FileReader;m.onerror=function(){n(new Error("Failed to read data."))},m.onload=function(){var e=new o(new Uint8Array(m.result));i.update(e),p+=e.length,m._continueReading()},m._continueReading=function(){if(p>=t.size)return void n(null,i.digest(r));var e=p+l;e>t.size&&(e=t.size),m.readAsArrayBuffer(s.call(t,p,e))
},m._continueReading()}},toHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push(("0"+e.charCodeAt(r).toString(16)).substr(-2,2));return t.join("")},createHash:function(e){return i.createHash(e)}},abort:{},each:function(e,t){for(var r in e)if(e.hasOwnProperty(r)){var n=t.call(this,r,e[r]);if(n===a.abort)break}},arrayEach:function(e,t){for(var r in e)if(e.hasOwnProperty(r)){var n=t.call(this,e[r],parseInt(r,10));if(n===a.abort)break}},update:function(e,t){return a.each(t,function(t,r){e[t]=r}),e},merge:function(e,t){return a.update(a.copy(e),t)},copy:function(e){if(null===e||void 0===e)return e;var t={};for(var r in e)t[r]=e[r];return t},isEmpty:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},arraySliceFn:function(e){var t=e.slice||e.webkitSlice||e.mozSlice;return"function"==typeof t?t:null},isType:function(e,t){return"function"==typeof t&&(t=a.typeName(t)),Object.prototype.toString.call(e)==="[object "+t+"]"},typeName:function(e){if(e.hasOwnProperty("name"))return e.name;var t=e.toString(),r=t.match(/^\s*function (.+)\(/);return r?r[1]:t},error:function(e,t){var r=null;return"string"==typeof e.message&&""!==e.message&&("string"==typeof t||t&&t.message)&&(r=a.copy(e),r.message=e.message),e.message=e.message||null,"string"==typeof t?e.message=t:a.update(e,t),"function"==typeof Object.defineProperty&&(Object.defineProperty(e,"name",{writable:!0,enumerable:!1}),Object.defineProperty(e,"message",{enumerable:!0})),e.name=e.name||e.code||"Error",e.time=new Date,r&&(e.originalError=r),e},inherit:function(e,t){var r=null;if(void 0===t)t=e,e=Object,r={};else{var n=function(){};n.prototype=e.prototype,r=new n}return t.constructor===Object&&(t.constructor=function(){return e!==Object?e.apply(this,arguments):void 0}),t.constructor.prototype=r,a.update(t.constructor.prototype,t),t.constructor.__super__=e,t.constructor},mixin:function(){for(var e=arguments[0],t=1;t<arguments.length;t++)for(var r in arguments[t].prototype){var n=arguments[t].prototype[r];"constructor"!==r&&(e.prototype[r]=n)}return e},hideProperties:function(e,t){"function"==typeof Object.defineProperty&&a.arrayEach(t,function(t){Object.defineProperty(e,t,{enumerable:!1,writable:!0,configurable:!0})})},property:function(e,t,r,n,i){var o={configurable:!0,enumerable:void 0!==n?n:!0};"function"!=typeof r||i?(o.value=r,o.writable=!0):o.get=r,Object.defineProperty(e,t,o)},memoizedProperty:function(e,t,r,n){var i=null;a.property(e,t,function(){return null===i&&(i=r()),i},n)}};t.exports=a}).call(this,e("FWaASH"))},{"./core":3,FWaASH:63,buffer:52,crypto:56,querystring:67,url:68}],50:[function(e,t){function r(){}function n(e,t){switch(t||(t={}),t.type){case"structure":return i(e,t);case"map":return o(e,t);case"list":return a(e,t);case void 0:case null:return u(e);default:return s(e,t)}}function i(e,t){var r={};return null===e?r:(c.each(t.members,function(t,i){if(i.isXmlAttribute){if(e.attributes.hasOwnProperty(i.name)){var o=e.attributes[i.name].value;r[t]=n({textContent:o},i)}}else{var a=i.flattened?e:e.getElementsByTagName(i.name)[0];a?r[t]=n(a,i):i.flattened||"list"!==i.type||(r[t]=i.defaultValue)}}),r)}function o(e,t){for(var r={},i=t.key.name||"key",o=t.value.name||"value",a=t.flattened?t.name:"entry",s=e.firstElementChild;s;){if(s.nodeName===a){var u=s.getElementsByTagName(i)[0].textContent,c=s.getElementsByTagName(o)[0];r[u]=n(c,t.value)}s=s.nextElementSibling}return r}function a(e,t){for(var r=[],i=t.flattened?t.name:t.member.name||"member",o=e.firstElementChild;o;)o.nodeName===i&&r.push(n(o,t.member)),o=o.nextElementSibling;return r}function s(e,t){if(e.getAttribute){var r=e.getAttribute("encoding");"base64"===r&&(t=new p.create({type:r}))}var n=e.textContent;return""===n&&(n=null),"function"==typeof t.toType?t.toType(n):n}function u(e){if(void 0===e||null===e)return"";if(!e.firstElementChild)return null===e.parentNode.parentNode?{}:0===e.childNodes.length?"":e.textContent;for(var t={type:"structure",members:{}},r=e.firstElementChild;r;){var n=r.nodeName;t.members.hasOwnProperty(n)?t.members[n].type="list":t.members[n]={name:n},r=r.nextElementSibling}return i(e,t)}var c=e("../util"),p=e("../model/shape");r.prototype.parse=function(e,t){if(""===e.replace(/^\s+/,""))return{};var r,i;try{if(window.DOMParser){try{var o=new DOMParser;r=o.parseFromString(e,"text/xml")}catch(a){throw c.error(new Error("Parse error in document"),{originalError:a})}if(null===r.documentElement)throw new Error("Cannot parse empty document.");var s=r.getElementsByTagName("parsererror")[0];if(s&&(s.parentNode===r||"body"===s.parentNode.nodeName))throw new Error(s.getElementsByTagName("div")[0].textContent)}else{if(!window.ActiveXObject)throw new Error("Cannot load XML parser");if(r=new window.ActiveXObject("Microsoft.XMLDOM"),r.async=!1,!r.loadXML(e))throw new Error("Parse error in document")}}catch(u){i=u}if(r&&r.documentElement&&!i){var p=n(r.documentElement,t),l=r.getElementsByTagName("ResponseMetadata")[0];return l&&(p.ResponseMetadata=n(l,{})),p}if(i)throw c.error(i||new Error,{code:"XMLParserError"});return{}},t.exports=r},{"../model/shape":20,"../util":49}],51:[function(e,t){function r(){}function n(e,t,r){switch(r.type){case"structure":return i(e,t,r);case"map":return o(e,t,r);case"list":return a(e,t,r);default:return s(e,t,r)}}function i(e,t,r){c.arrayEach(r.memberNames,function(i){var o=r.members[i];if("body"===o.location){var a=t[i],s=o.name;if(void 0!==a&&null!==a)if(o.isXmlAttribute)e.att(s,a);else if(o.flattened)n(e,a,o);else{var c=e.ele(s);u(c,o),n(c,a,o)}}})}function o(e,t,r){var i=r.key.name||"key",o=r.value.name||"value";c.each(t,function(t,a){var s=e.ele(r.flattened?r.name:"entry");n(s.ele(i),t,r.key),n(s.ele(o),a,r.value)})}function a(e,t,r){r.flattened?c.arrayEach(t,function(t){var i=r.member.name||r.name,o=e.ele(i);n(o,t,r.member)}):c.arrayEach(t,function(t){var i=r.member.name||"member",o=e.ele(i);n(o,t,r.member)})}function s(e,t,r){e.txt(r.toWireFormat(t))}function u(e,t){var r,n="xmlns";t.xmlNamespaceUri?(r=t.xmlNamespaceUri,t.xmlNamespacePrefix&&(n+=":"+t.xmlNamespacePrefix)):e.isRoot&&t.api.xmlNamespaceUri&&(r=t.api.xmlNamespaceUri),r&&e.att(n,r)}var c=e("../util"),p=e("xmlbuilder");r.prototype.toXML=function(e,t,r){var i=p.create(r);return u(i,t),n(i,e,t),0===i.children.length?"":i.root().toString()},t.exports=r},{"../util":49,xmlbuilder:73}],52:[function(e,t,r){function n(e,t,r){if(!(this instanceof n))return new n(e,t,r);var i=typeof e;if("base64"===t&&"string"===i)for(e=A(e);e.length%4!==0;)e+="=";var o;if("number"===i)o=T(e);else if("string"===i)o=n.byteLength(e,t);else{if("object"!==i)throw new Error("First argument needs to be a number, array or string.");o=T(e.length)}var a;n._useTypedArrays?a=n._augment(new Uint8Array(o)):(a=this,a.length=o,a._isBuffer=!0);var s;if(n._useTypedArrays&&"number"==typeof e.byteLength)a._set(e);else if(P(e))for(s=0;o>s;s++)a[s]=n.isBuffer(e)?e.readUInt8(s):e[s];else if("string"===i)a.write(e,0,t);else if("number"===i&&!n._useTypedArrays&&!r)for(s=0;o>s;s++)a[s]=0;return a}function i(e,t,r,i){r=Number(r)||0;var o=e.length-r;i?(i=Number(i),i>o&&(i=o)):i=o;var a=t.length;F(a%2===0,"Invalid hex string"),i>a/2&&(i=a/2);for(var s=0;i>s;s++){var u=parseInt(t.substr(2*s,2),16);F(!isNaN(u),"Invalid hex string"),e[r+s]=u}return n._charsWritten=2*s,s}function o(e,t,r,i){var o=n._charsWritten=_(B(t),e,r,i);return o}function a(e,t,r,i){var o=n._charsWritten=_(L(t),e,r,i);return o}function s(e,t,r,n){return a(e,t,r,n)}function u(e,t,r,i){var o=n._charsWritten=_(U(t),e,r,i);return o}function c(e,t,r,i){var o=n._charsWritten=_(D(t),e,r,i);return o}function p(e,t,r){return V.fromByteArray(0===t&&r===e.length?e:e.slice(t,r))}function l(e,t,r){var n="",i="";r=Math.min(e.length,r);for(var o=t;r>o;o++)e[o]<=127?(n+=z(i)+String.fromCharCode(e[o]),i=""):i+="%"+e[o].toString(16);return n+z(i)}function m(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;r>i;i++)n+=String.fromCharCode(e[i]);return n}function d(e,t,r){return m(e,t,r)}function h(e,t,r){var n=e.length;(!t||0>t)&&(t=0),(!r||0>r||r>n)&&(r=n);for(var i="",o=t;r>o;o++)i+=M(e[o]);return i}function y(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function f(e,t,r,n){n||(F("boolean"==typeof r,"missing or invalid endian"),F(void 0!==t&&null!==t,"missing offset"),F(t+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o;return r?(o=e[t],i>t+1&&(o|=e[t+1]<<8)):(o=e[t]<<8,i>t+1&&(o|=e[t+1])),o}}function g(e,t,r,n){n||(F("boolean"==typeof r,"missing or invalid endian"),F(void 0!==t&&null!==t,"missing offset"),F(t+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o;return r?(i>t+2&&(o=e[t+2]<<16),i>t+1&&(o|=e[t+1]<<8),o|=e[t],i>t+3&&(o+=e[t+3]<<24>>>0)):(i>t+1&&(o=e[t+1]<<16),i>t+2&&(o|=e[t+2]<<8),i>t+3&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}}function b(e,t,r,n){n||(F("boolean"==typeof r,"missing or invalid endian"),F(void 0!==t&&null!==t,"missing offset"),F(t+1<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o=f(e,t,r,!0),a=32768&o;return a?-1*(65535-o+1):o}}function v(e,t,r,n){n||(F("boolean"==typeof r,"missing or invalid endian"),F(void 0!==t&&null!==t,"missing offset"),F(t+3<e.length,"Trying to read beyond buffer length"));var i=e.length;if(!(t>=i)){var o=g(e,t,r,!0),a=2147483648&o;return a?-1*(4294967295-o+1):o}}function S(e,t,r,n){return n||(F("boolean"==typeof r,"missing or invalid endian"),F(t+3<e.length,"Trying to read beyond buffer length")),H.read(e,t,r,23,4)}function N(e,t,r,n){return n||(F("boolean"==typeof r,"missing or invalid endian"),F(t+7<e.length,"Trying to read beyond buffer length")),H.read(e,t,r,52,8)}function I(e,t,r,n,i){i||(F(void 0!==t&&null!==t,"missing value"),F("boolean"==typeof n,"missing or invalid endian"),F(void 0!==r&&null!==r,"missing offset"),F(r+1<e.length,"trying to write beyond buffer length"),O(t,65535));var o=e.length;if(!(r>=o))for(var a=0,s=Math.min(o-r,2);s>a;a++)e[r+a]=(t&255<<8*(n?a:1-a))>>>8*(n?a:1-a)}function C(e,t,r,n,i){i||(F(void 0!==t&&null!==t,"missing value"),F("boolean"==typeof n,"missing or invalid endian"),F(void 0!==r&&null!==r,"missing offset"),F(r+3<e.length,"trying to write beyond buffer length"),O(t,4294967295));var o=e.length;if(!(r>=o))for(var a=0,s=Math.min(o-r,4);s>a;a++)e[r+a]=t>>>8*(n?a:3-a)&255}function E(e,t,r,n,i){i||(F(void 0!==t&&null!==t,"missing value"),F("boolean"==typeof n,"missing or invalid endian"),F(void 0!==r&&null!==r,"missing offset"),F(r+1<e.length,"Trying to write beyond buffer length"),K(t,32767,-32768));var o=e.length;r>=o||(t>=0?I(e,t,r,n,i):I(e,65535+t+1,r,n,i))}function x(e,t,r,n,i){i||(F(void 0!==t&&null!==t,"missing value"),F("boolean"==typeof n,"missing or invalid endian"),F(void 0!==r&&null!==r,"missing offset"),F(r+3<e.length,"Trying to write beyond buffer length"),K(t,2147483647,-2147483648));var o=e.length;r>=o||(t>=0?C(e,t,r,n,i):C(e,4294967295+t+1,r,n,i))}function k(e,t,r,n,i){i||(F(void 0!==t&&null!==t,"missing value"),F("boolean"==typeof n,"missing or invalid endian"),F(void 0!==r&&null!==r,"missing offset"),F(r+3<e.length,"Trying to write beyond buffer length"),j(t,3.4028234663852886e38,-3.4028234663852886e38));var o=e.length;r>=o||H.write(e,t,r,n,23,4)}function q(e,t,r,n,i){i||(F(void 0!==t&&null!==t,"missing value"),F("boolean"==typeof n,"missing or invalid endian"),F(void 0!==r&&null!==r,"missing offset"),F(r+7<e.length,"Trying to write beyond buffer length"),j(t,1.7976931348623157e308,-1.7976931348623157e308));var o=e.length;r>=o||H.write(e,t,r,n,52,8)}function A(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function w(e,t,r){return"number"!=typeof e?r:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function T(e){return e=~~Math.ceil(+e),0>e?0:e}function R(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function P(e){return R(e)||n.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function M(e){return 16>e?"0"+e.toString(16):e.toString(16)}function B(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(127>=n)t.push(e.charCodeAt(r));else{var i=r;n>=55296&&57343>=n&&r++;for(var o=encodeURIComponent(e.slice(i,r+1)).substr(1).split("%"),a=0;a<o.length;a++)t.push(parseInt(o[a],16))}}return t}function L(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}function D(e){for(var t,r,n,i=[],o=0;o<e.length;o++)t=e.charCodeAt(o),r=t>>8,n=t%256,i.push(n),i.push(r);return i}function U(e){return V.toByteArray(e)}function _(e,t,r,n){for(var i=0;n>i&&!(i+r>=t.length||i>=e.length);i++)t[i+r]=e[i];return i}function z(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function O(e,t){F("number"==typeof e,"cannot write a non-number as a number"),F(e>=0,"specified a negative value for writing an unsigned value"),F(t>=e,"value is larger than maximum value for type"),F(Math.floor(e)===e,"value has a fractional component")}function K(e,t,r){F("number"==typeof e,"cannot write a non-number as a number"),F(t>=e,"value larger than maximum allowed value"),F(e>=r,"value smaller than minimum allowed value"),F(Math.floor(e)===e,"value has a fractional component")}function j(e,t,r){F("number"==typeof e,"cannot write a non-number as a number"),F(t>=e,"value larger than maximum allowed value"),F(e>=r,"value smaller than minimum allowed value")}function F(e,t){if(!e)throw new Error(t||"Failed assertion")}var V=e("base64-js"),H=e("ieee754");r.Buffer=n,r.SlowBuffer=n,r.INSPECT_MAX_BYTES=50,n.poolSize=8192,n._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(r){return!1}}(),n.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},n.byteLength=function(e,t){var r;switch(e+="",t||"utf8"){case"hex":r=e.length/2;break;case"utf8":case"utf-8":r=B(e).length;break;case"ascii":case"binary":case"raw":r=e.length;break;case"base64":r=U(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*e.length;break;default:throw new Error("Unknown encoding")}return r},n.concat=function(e,t){if(F(R(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new n(0);if(1===e.length)return e[0];var r;if("number"!=typeof t)for(t=0,r=0;r<e.length;r++)t+=e[r].length;var i=new n(t),o=0;for(r=0;r<e.length;r++){var a=e[r];a.copy(i,o),o+=a.length}return i},n.prototype.write=function(e,t,r,n){if(isFinite(t))isFinite(r)||(n=r,r=void 0);else{var p=n;n=t,t=r,r=p}t=Number(t)||0;var l=this.length-t;r?(r=Number(r),r>l&&(r=l)):r=l,n=String(n||"utf8").toLowerCase();var m;switch(n){case"hex":m=i(this,e,t,r);break;case"utf8":case"utf-8":m=o(this,e,t,r);break;case"ascii":m=a(this,e,t,r);break;case"binary":m=s(this,e,t,r);break;case"base64":m=u(this,e,t,r);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":m=c(this,e,t,r);break;default:throw new Error("Unknown encoding")}return m},n.prototype.toString=function(e,t,r){var n=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,r=void 0!==r?Number(r):r=n.length,r===t)return"";var i;switch(e){case"hex":i=h(n,t,r);break;case"utf8":case"utf-8":i=l(n,t,r);break;case"ascii":i=m(n,t,r);break;case"binary":i=d(n,t,r);break;case"base64":i=p(n,t,r);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=y(n,t,r);break;default:throw new Error("Unknown encoding")}return i},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},n.prototype.copy=function(e,t,r,i){var o=this;if(r||(r=0),i||0===i||(i=this.length),t||(t=0),i!==r&&0!==e.length&&0!==o.length){F(i>=r,"sourceEnd < sourceStart"),F(t>=0&&t<e.length,"targetStart out of bounds"),F(r>=0&&r<o.length,"sourceStart out of bounds"),F(i>=0&&i<=o.length,"sourceEnd out of bounds"),i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);var a=i-r;if(100>a||!n._useTypedArrays)for(var s=0;a>s;s++)e[s+t]=this[s+r];else e._set(this.subarray(r,r+a),t)}},n.prototype.slice=function(e,t){var r=this.length;if(e=w(e,r,0),t=w(t,r,r),n._useTypedArrays)return n._augment(this.subarray(e,t));for(var i=t-e,o=new n(i,void 0,!0),a=0;i>a;a++)o[a]=this[a+e];return o},n.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},n.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},n.prototype.readUInt8=function(e,t){return t||(F(void 0!==e&&null!==e,"missing offset"),F(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},n.prototype.readUInt16LE=function(e,t){return f(this,e,!0,t)},n.prototype.readUInt16BE=function(e,t){return f(this,e,!1,t)},n.prototype.readUInt32LE=function(e,t){return g(this,e,!0,t)},n.prototype.readUInt32BE=function(e,t){return g(this,e,!1,t)},n.prototype.readInt8=function(e,t){if(t||(F(void 0!==e&&null!==e,"missing offset"),F(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var r=128&this[e];return r?-1*(255-this[e]+1):this[e]}},n.prototype.readInt16LE=function(e,t){return b(this,e,!0,t)},n.prototype.readInt16BE=function(e,t){return b(this,e,!1,t)},n.prototype.readInt32LE=function(e,t){return v(this,e,!0,t)},n.prototype.readInt32BE=function(e,t){return v(this,e,!1,t)},n.prototype.readFloatLE=function(e,t){return S(this,e,!0,t)},n.prototype.readFloatBE=function(e,t){return S(this,e,!1,t)},n.prototype.readDoubleLE=function(e,t){return N(this,e,!0,t)},n.prototype.readDoubleBE=function(e,t){return N(this,e,!1,t)},n.prototype.writeUInt8=function(e,t,r){r||(F(void 0!==e&&null!==e,"missing value"),F(void 0!==t&&null!==t,"missing offset"),F(t<this.length,"trying to write beyond buffer length"),O(e,255)),t>=this.length||(this[t]=e)},n.prototype.writeUInt16LE=function(e,t,r){I(this,e,t,!0,r)},n.prototype.writeUInt16BE=function(e,t,r){I(this,e,t,!1,r)},n.prototype.writeUInt32LE=function(e,t,r){C(this,e,t,!0,r)},n.prototype.writeUInt32BE=function(e,t,r){C(this,e,t,!1,r)},n.prototype.writeInt8=function(e,t,r){r||(F(void 0!==e&&null!==e,"missing value"),F(void 0!==t&&null!==t,"missing offset"),F(t<this.length,"Trying to write beyond buffer length"),K(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,r):this.writeUInt8(255+e+1,t,r))},n.prototype.writeInt16LE=function(e,t,r){E(this,e,t,!0,r)},n.prototype.writeInt16BE=function(e,t,r){E(this,e,t,!1,r)},n.prototype.writeInt32LE=function(e,t,r){x(this,e,t,!0,r)},n.prototype.writeInt32BE=function(e,t,r){x(this,e,t,!1,r)},n.prototype.writeFloatLE=function(e,t,r){k(this,e,t,!0,r)},n.prototype.writeFloatBE=function(e,t,r){k(this,e,t,!1,r)},n.prototype.writeDoubleLE=function(e,t,r){q(this,e,t,!0,r)},n.prototype.writeDoubleBE=function(e,t,r){q(this,e,t,!1,r)},n.prototype.fill=function(e,t,r){if(e||(e=0),t||(t=0),r||(r=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),F("number"==typeof e&&!isNaN(e),"value is not a number"),F(r>=t,"end < start"),r!==t&&0!==this.length){F(t>=0&&t<this.length,"start out of bounds"),F(r>=0&&r<=this.length,"end out of bounds");for(var n=t;r>n;n++)this[n]=e}},n.prototype.inspect=function(){for(var e=[],t=this.length,n=0;t>n;n++)if(e[n]=M(this[n]),n===r.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},n.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(n._useTypedArrays)return new n(this).buffer;for(var e=new Uint8Array(this.length),t=0,r=e.length;r>t;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var W=n.prototype;n._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=W.get,e.set=W.set,e.write=W.write,e.toString=W.toString,e.toLocaleString=W.toString,e.toJSON=W.toJSON,e.copy=W.copy,e.slice=W.slice,e.readUInt8=W.readUInt8,e.readUInt16LE=W.readUInt16LE,e.readUInt16BE=W.readUInt16BE,e.readUInt32LE=W.readUInt32LE,e.readUInt32BE=W.readUInt32BE,e.readInt8=W.readInt8,e.readInt16LE=W.readInt16LE,e.readInt16BE=W.readInt16BE,e.readInt32LE=W.readInt32LE,e.readInt32BE=W.readInt32BE,e.readFloatLE=W.readFloatLE,e.readFloatBE=W.readFloatBE,e.readDoubleLE=W.readDoubleLE,e.readDoubleBE=W.readDoubleBE,e.writeUInt8=W.writeUInt8,e.writeUInt16LE=W.writeUInt16LE,e.writeUInt16BE=W.writeUInt16BE,e.writeUInt32LE=W.writeUInt32LE,e.writeUInt32BE=W.writeUInt32BE,e.writeInt8=W.writeInt8,e.writeInt16LE=W.writeInt16LE,e.writeInt16BE=W.writeInt16BE,e.writeInt32LE=W.writeInt32LE,e.writeInt32BE=W.writeInt32BE,e.writeFloatLE=W.writeFloatLE,e.writeFloatBE=W.writeFloatBE,e.writeDoubleLE=W.writeDoubleLE,e.writeDoubleBE=W.writeDoubleBE,e.fill=W.fill,e.inspect=W.inspect,e.toArrayBuffer=W.toArrayBuffer,e}},{"base64-js":53,ieee754:54}],53:[function(e,t,r){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===a||t===l?62:t===s||t===m?63:u>t?-1:u+10>t?t-u+26+26:p+26>t?t-p:c+26>t?t-c+26:void 0}function r(e){function r(e){c[l++]=e}var n,i,a,s,u,c;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var p=e.length;u="="===e.charAt(p-2)?2:"="===e.charAt(p-1)?1:0,c=new o(3*e.length/4-u),a=u>0?e.length-4:e.length;var l=0;for(n=0,i=0;a>n;n+=4,i+=3)s=t(e.charAt(n))<<18|t(e.charAt(n+1))<<12|t(e.charAt(n+2))<<6|t(e.charAt(n+3)),r((16711680&s)>>16),r((65280&s)>>8),r(255&s);return 2===u?(s=t(e.charAt(n))<<2|t(e.charAt(n+1))>>4,r(255&s)):1===u&&(s=t(e.charAt(n))<<10|t(e.charAt(n+1))<<4|t(e.charAt(n+2))>>2,r(s>>8&255),r(255&s)),c}function i(e){function t(e){return n.charAt(e)}function r(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var i,o,a,s=e.length%3,u="";for(i=0,a=e.length-s;a>i;i+=3)o=(e[i]<<16)+(e[i+1]<<8)+e[i+2],u+=r(o);switch(s){case 1:o=e[e.length-1],u+=t(o>>2),u+=t(o<<4&63),u+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],u+=t(o>>10),u+=t(o>>4&63),u+=t(o<<2&63),u+="="}return u}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="+".charCodeAt(0),s="/".charCodeAt(0),u="0".charCodeAt(0),c="a".charCodeAt(0),p="A".charCodeAt(0),l="-".charCodeAt(0),m="_".charCodeAt(0);e.toByteArray=r,e.fromByteArray=i}("undefined"==typeof r?this.base64js={}:r)},{}],54:[function(e,t,r){r.read=function(e,t,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,c=u>>1,p=-7,l=r?i-1:0,m=r?-1:1,d=e[t+l];for(l+=m,o=d&(1<<-p)-1,d>>=-p,p+=s;p>0;o=256*o+e[t+l],l+=m,p-=8);for(a=o&(1<<-p)-1,o>>=-p,p+=n;p>0;a=256*a+e[t+l],l+=m,p-=8);if(0===o)o=1-c;else{if(o===u)return a?0/0:1/0*(d?-1:1);a+=Math.pow(2,n),o-=c}return(d?-1:1)*a*Math.pow(2,o-n)},r.write=function(e,t,r,n,i,o){var a,s,u,c=8*o-i-1,p=(1<<c)-1,l=p>>1,m=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,h=n?1:-1,y=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||1/0===t?(s=isNaN(t)?1:0,a=p):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),t+=a+l>=1?m/u:m*Math.pow(2,1-l),t*u>=2&&(a++,u/=2),a+l>=p?(s=0,a=p):a+l>=1?(s=(t*u-1)*Math.pow(2,i),a+=l):(s=t*Math.pow(2,l-1)*Math.pow(2,i),a=0));i>=8;e[r+d]=255&s,d+=h,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[r+d]=255&a,d+=h,a/=256,c-=8);e[r+d-h]|=128*y}},{}],55:[function(e,t){function r(e,t){if(e.length%a!==0){var r=e.length+(a-e.length%a);e=o.concat([e,s],r)}for(var n=[],i=t?e.readInt32BE:e.readInt32LE,u=0;u<e.length;u+=a)n.push(i.call(e,u));return n}function n(e,t,r){for(var n=new o(t),i=r?n.writeInt32BE:n.writeInt32LE,a=0;a<e.length;a++)i.call(n,e[a],4*a,!0);return n}function i(e,t,i,a){o.isBuffer(e)||(e=new o(e));var s=t(r(e,a),e.length*u);return n(s,i,a)}var o=e("buffer").Buffer,a=4,s=new o(a);s.fill(0);var u=8;t.exports={hash:i}},{buffer:52}],56:[function(e,t,r){function n(e,t,r){s.isBuffer(t)||(t=new s(t)),s.isBuffer(r)||(r=new s(r)),t.length>d?t=e(t):t.length<d&&(t=s.concat([t,h],d));for(var n=new s(d),i=new s(d),o=0;d>o;o++)n[o]=54^t[o],i[o]=92^t[o];var a=e(s.concat([n,r]));return e(s.concat([i,a]))}function i(e,t){e=e||"sha1";var r=m[e],i=[],a=0;return r||o("algorithm:",e,"is not yet supported"),{update:function(e){return s.isBuffer(e)||(e=new s(e)),i.push(e),a+=e.length,this},digest:function(e){var o=s.concat(i),a=t?n(r,t,o):r(o);return i=null,e?a.toString(e):a}}}function o(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}function a(e,t){for(var r in e)t(e[r],r)}var s=e("buffer").Buffer,u=e("./sha"),c=e("./sha256"),p=e("./rng"),l=e("./md5"),m={sha1:u,sha256:c,md5:l},d=64,h=new s(d);h.fill(0),r.createHash=function(e){return i(e)},r.createHmac=function(e,t){return i(e,t)},r.randomBytes=function(e,t){if(!t||!t.call)return new s(p(e));try{t.call(this,void 0,new s(p(e)))}catch(r){t(r)}},a(["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],function(e){r[e]=function(){o("sorry,",e,"is not implemented yet")}})},{"./md5":57,"./rng":58,"./sha":59,"./sha256":60,buffer:52}],57:[function(e,t){function r(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;for(var r=1732584193,n=-271733879,c=-1732584194,p=271733878,l=0;l<e.length;l+=16){var m=r,d=n,h=c,y=p;r=i(r,n,c,p,e[l+0],7,-680876936),p=i(p,r,n,c,e[l+1],12,-389564586),c=i(c,p,r,n,e[l+2],17,606105819),n=i(n,c,p,r,e[l+3],22,-1044525330),r=i(r,n,c,p,e[l+4],7,-176418897),p=i(p,r,n,c,e[l+5],12,1200080426),c=i(c,p,r,n,e[l+6],17,-1473231341),n=i(n,c,p,r,e[l+7],22,-45705983),r=i(r,n,c,p,e[l+8],7,1770035416),p=i(p,r,n,c,e[l+9],12,-1958414417),c=i(c,p,r,n,e[l+10],17,-42063),n=i(n,c,p,r,e[l+11],22,-1990404162),r=i(r,n,c,p,e[l+12],7,1804603682),p=i(p,r,n,c,e[l+13],12,-40341101),c=i(c,p,r,n,e[l+14],17,-1502002290),n=i(n,c,p,r,e[l+15],22,1236535329),r=o(r,n,c,p,e[l+1],5,-165796510),p=o(p,r,n,c,e[l+6],9,-1069501632),c=o(c,p,r,n,e[l+11],14,643717713),n=o(n,c,p,r,e[l+0],20,-373897302),r=o(r,n,c,p,e[l+5],5,-701558691),p=o(p,r,n,c,e[l+10],9,38016083),c=o(c,p,r,n,e[l+15],14,-660478335),n=o(n,c,p,r,e[l+4],20,-405537848),r=o(r,n,c,p,e[l+9],5,568446438),p=o(p,r,n,c,e[l+14],9,-1019803690),c=o(c,p,r,n,e[l+3],14,-187363961),n=o(n,c,p,r,e[l+8],20,1163531501),r=o(r,n,c,p,e[l+13],5,-1444681467),p=o(p,r,n,c,e[l+2],9,-51403784),c=o(c,p,r,n,e[l+7],14,1735328473),n=o(n,c,p,r,e[l+12],20,-1926607734),r=a(r,n,c,p,e[l+5],4,-378558),p=a(p,r,n,c,e[l+8],11,-2022574463),c=a(c,p,r,n,e[l+11],16,1839030562),n=a(n,c,p,r,e[l+14],23,-35309556),r=a(r,n,c,p,e[l+1],4,-1530992060),p=a(p,r,n,c,e[l+4],11,1272893353),c=a(c,p,r,n,e[l+7],16,-155497632),n=a(n,c,p,r,e[l+10],23,-1094730640),r=a(r,n,c,p,e[l+13],4,681279174),p=a(p,r,n,c,e[l+0],11,-358537222),c=a(c,p,r,n,e[l+3],16,-722521979),n=a(n,c,p,r,e[l+6],23,76029189),r=a(r,n,c,p,e[l+9],4,-640364487),p=a(p,r,n,c,e[l+12],11,-421815835),c=a(c,p,r,n,e[l+15],16,530742520),n=a(n,c,p,r,e[l+2],23,-995338651),r=s(r,n,c,p,e[l+0],6,-198630844),p=s(p,r,n,c,e[l+7],10,1126891415),c=s(c,p,r,n,e[l+14],15,-1416354905),n=s(n,c,p,r,e[l+5],21,-57434055),r=s(r,n,c,p,e[l+12],6,1700485571),p=s(p,r,n,c,e[l+3],10,-1894986606),c=s(c,p,r,n,e[l+10],15,-1051523),n=s(n,c,p,r,e[l+1],21,-2054922799),r=s(r,n,c,p,e[l+8],6,1873313359),p=s(p,r,n,c,e[l+15],10,-30611744),c=s(c,p,r,n,e[l+6],15,-1560198380),n=s(n,c,p,r,e[l+13],21,1309151649),r=s(r,n,c,p,e[l+4],6,-145523070),p=s(p,r,n,c,e[l+11],10,-1120210379),c=s(c,p,r,n,e[l+2],15,718787259),n=s(n,c,p,r,e[l+9],21,-343485551),r=u(r,m),n=u(n,d),c=u(c,h),p=u(p,y)}return Array(r,n,c,p)}function n(e,t,r,n,i,o){return u(c(u(u(t,e),u(n,o)),i),r)}function i(e,t,r,i,o,a,s){return n(t&r|~t&i,e,t,o,a,s)}function o(e,t,r,i,o,a,s){return n(t&i|r&~i,e,t,o,a,s)}function a(e,t,r,i,o,a,s){return n(t^r^i,e,t,o,a,s)}function s(e,t,r,i,o,a,s){return n(r^(t|~i),e,t,o,a,s)}function u(e,t){var r=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(r>>16);return n<<16|65535&r}function c(e,t){return e<<t|e>>>32-t}var p=e("./helpers");t.exports=function(e){return p.hash(e,r,16)}},{"./helpers":55}],58:[function(e,t){!function(){var e,r,n=this;e=function(e){for(var t,t,r=new Array(e),n=0;e>n;n++)0==(3&n)&&(t=4294967296*Math.random()),r[n]=t>>>((3&n)<<3)&255;return r},n.crypto&&crypto.getRandomValues&&(r=function(e){var t=new Uint8Array(e);return crypto.getRandomValues(t),t}),t.exports=r||e}()},{}],59:[function(e,t){function r(e,t){e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;for(var r=Array(80),s=1732584193,u=-271733879,c=-1732584194,p=271733878,l=-1009589776,m=0;m<e.length;m+=16){for(var d=s,h=u,y=c,f=p,g=l,b=0;80>b;b++){r[b]=16>b?e[m+b]:a(r[b-3]^r[b-8]^r[b-14]^r[b-16],1);var v=o(o(a(s,5),n(b,u,c,p)),o(o(l,r[b]),i(b)));l=p,p=c,c=a(u,30),u=s,s=v}s=o(s,d),u=o(u,h),c=o(c,y),p=o(p,f),l=o(l,g)}return Array(s,u,c,p,l)}function n(e,t,r,n){return 20>e?t&r|~t&n:40>e?t^r^n:60>e?t&r|t&n|r&n:t^r^n}function i(e){return 20>e?1518500249:40>e?1859775393:60>e?-1894007588:-899497514}function o(e,t){var r=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(r>>16);return n<<16|65535&r}function a(e,t){return e<<t|e>>>32-t}var s=e("./helpers");t.exports=function(e){return s.hash(e,r,20,!0)}},{"./helpers":55}],60:[function(e,t){var r=e("./helpers"),n=function(e,t){var r=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(r>>16);return n<<16|65535&r},i=function(e,t){return e>>>t|e<<32-t},o=function(e,t){return e>>>t},a=function(e,t,r){return e&t^~e&r},s=function(e,t,r){return e&t^e&r^t&r},u=function(e){return i(e,2)^i(e,13)^i(e,22)},c=function(e){return i(e,6)^i(e,11)^i(e,25)},p=function(e){return i(e,7)^i(e,18)^o(e,3)},l=function(e){return i(e,17)^i(e,19)^o(e,10)},m=function(e,t){var r,i,o,m,d,h,y,f,g,b,v,S,N=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),I=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),C=new Array(64);e[t>>5]|=128<<24-t%32,e[(t+64>>9<<4)+15]=t;for(var g=0;g<e.length;g+=16){r=I[0],i=I[1],o=I[2],m=I[3],d=I[4],h=I[5],y=I[6],f=I[7];for(var b=0;64>b;b++)C[b]=16>b?e[b+g]:n(n(n(l(C[b-2]),C[b-7]),p(C[b-15])),C[b-16]),v=n(n(n(n(f,c(d)),a(d,h,y)),N[b]),C[b]),S=n(u(r),s(r,i,o)),f=y,y=h,h=d,d=n(m,v),m=o,o=i,i=r,r=n(v,S);I[0]=n(r,I[0]),I[1]=n(i,I[1]),I[2]=n(o,I[2]),I[3]=n(m,I[3]),I[4]=n(d,I[4]),I[5]=n(h,I[5]),I[6]=n(y,I[6]),I[7]=n(f,I[7])}return I};t.exports=function(e){return r.hash(e,m,32,!0)}},{"./helpers":55}],61:[function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,i,s,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[e],a(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:for(i=arguments.length,s=new Array(i-1),u=1;i>u;u++)s[u-1]=arguments[u];
r.apply(this,s)}else if(o(r)){for(i=arguments.length,s=new Array(i-1),u=1;i>u;u++)s[u-1]=arguments[u];for(c=r.slice(),i=c.length,u=0;i>u;u++)c[u].apply(this,s)}return!0},r.prototype.addListener=function(e,t){var i;if(!n(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned){var i;i=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var i=!1;return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var r,i,a,s;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],a=r.length,i=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(r)){for(s=a;s-->0;)if(r[s]===t||r[s].listener&&r[s].listener===t){i=s;break}if(0>i)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],n(r))this.removeListener(e,r);else for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.listenerCount=function(e,t){var r;return r=e._events&&e._events[t]?n(e._events[t])?1:e._events[t].length:0}},{}],62:[function(e,t){t.exports="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],63:[function(e,t){function r(){}var n=t.exports={};n.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var r=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),r.length>0)){var n=r.shift();n()}},!0),function(e){r.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.on=r,n.addListener=r,n.once=r,n.off=r,n.removeListener=r,n.removeAllListeners=r,n.emit=r,n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}],64:[function(e,t,r){(function(e){!function(n){function i(e){throw RangeError(M[e])}function o(e,t){for(var r=e.length;r--;)e[r]=t(e[r]);return e}function a(e,t){return o(e.split(P),t).join(".")}function s(e){for(var t,r,n=[],i=0,o=e.length;o>i;)t=e.charCodeAt(i++),t>=55296&&56319>=t&&o>i?(r=e.charCodeAt(i++),56320==(64512&r)?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),i--)):n.push(t);return n}function u(e){return o(e,function(e){var t="";return e>65535&&(e-=65536,t+=D(e>>>10&1023|55296),e=56320|1023&e),t+=D(e)}).join("")}function c(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:I}function p(e,t){return e+22+75*(26>e)-((0!=t)<<5)}function l(e,t,r){var n=0;for(e=r?L(e/k):e>>1,e+=L(e/t);e>B*E>>1;n+=I)e=L(e/B);return L(n+(B+1)*e/(e+x))}function m(e){var t,r,n,o,a,s,p,m,d,h,y=[],f=e.length,g=0,b=A,v=q;for(r=e.lastIndexOf(w),0>r&&(r=0),n=0;r>n;++n)e.charCodeAt(n)>=128&&i("not-basic"),y.push(e.charCodeAt(n));for(o=r>0?r+1:0;f>o;){for(a=g,s=1,p=I;o>=f&&i("invalid-input"),m=c(e.charCodeAt(o++)),(m>=I||m>L((N-g)/s))&&i("overflow"),g+=m*s,d=v>=p?C:p>=v+E?E:p-v,!(d>m);p+=I)h=I-d,s>L(N/h)&&i("overflow"),s*=h;t=y.length+1,v=l(g-a,t,0==a),L(g/t)>N-b&&i("overflow"),b+=L(g/t),g%=t,y.splice(g++,0,b)}return u(y)}function d(e){var t,r,n,o,a,u,c,m,d,h,y,f,g,b,v,S=[];for(e=s(e),f=e.length,t=A,r=0,a=q,u=0;f>u;++u)y=e[u],128>y&&S.push(D(y));for(n=o=S.length,o&&S.push(w);f>n;){for(c=N,u=0;f>u;++u)y=e[u],y>=t&&c>y&&(c=y);for(g=n+1,c-t>L((N-r)/g)&&i("overflow"),r+=(c-t)*g,t=c,u=0;f>u;++u)if(y=e[u],t>y&&++r>N&&i("overflow"),y==t){for(m=r,d=I;h=a>=d?C:d>=a+E?E:d-a,!(h>m);d+=I)v=m-h,b=I-h,S.push(D(p(h+v%b,0))),m=L(v/b);S.push(D(p(m,0))),a=l(r,g,n==o),r=0,++n}++r,++t}return S.join("")}function h(e){return a(e,function(e){return T.test(e)?m(e.slice(4).toLowerCase()):e})}function y(e){return a(e,function(e){return R.test(e)?"xn--"+d(e):e})}var f="object"==typeof r&&r,g="object"==typeof t&&t&&t.exports==f&&t,b="object"==typeof e&&e;(b.global===b||b.window===b)&&(n=b);var v,S,N=2147483647,I=36,C=1,E=26,x=38,k=700,q=72,A=128,w="-",T=/^xn--/,R=/[^ -~]/,P=/\x2E|\u3002|\uFF0E|\uFF61/g,M={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},B=I-C,L=Math.floor,D=String.fromCharCode;if(v={version:"1.2.4",ucs2:{decode:s,encode:u},decode:m,encode:d,toASCII:y,toUnicode:h},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return v});else if(f&&!f.nodeType)if(g)g.exports=v;else for(S in v)v.hasOwnProperty(S)&&(f[S]=v[S]);else n.punycode=v}(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],65:[function(e,t){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,i,o){t=t||"&",i=i||"=";var a={};if("string"!=typeof e||0===e.length)return a;var s=/\+/g;e=e.split(t);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var c=e.length;u>0&&c>u&&(c=u);for(var p=0;c>p;++p){var l,m,d,h,y=e[p].replace(s,"%20"),f=y.indexOf(i);f>=0?(l=y.substr(0,f),m=y.substr(f+1)):(l=y,m=""),d=decodeURIComponent(l),h=decodeURIComponent(m),r(a,d)?n(a[d])?a[d].push(h):a[d]=[a[d],h]:a[d]=h}return a};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],66:[function(e,t){"use strict";function r(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,a,s){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"==typeof e?r(o(e),function(r){var o=encodeURIComponent(n(r))+a;return i(e[r])?e[r].map(function(e){return o+encodeURIComponent(n(e))}).join(t):o+encodeURIComponent(n(e[r]))}).join(t):s?encodeURIComponent(n(s))+a+encodeURIComponent(n(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},{}],67:[function(e,t,r){"use strict";r.decode=r.parse=e("./decode"),r.encode=r.stringify=e("./encode")},{"./decode":65,"./encode":66}],68:[function(e,t,r){function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(e,t,r){if(e&&c(e)&&e instanceof n)return e;var i=new n;return i.parse(e,t,r),i}function o(e){return u(e)&&(e=i(e)),e instanceof n?e.format():n.prototype.format.call(e)}function a(e,t){return i(e,!1,!0).resolve(t)}function s(e,t){return e?i(e,!1,!0).resolveObject(t):t}function u(e){return"string"==typeof e}function c(e){return"object"==typeof e&&null!==e}function p(e){return null===e}function l(e){return null==e}var m=e("punycode");r.parse=i,r.resolve=a,r.resolveObject=s,r.format=o,r.Url=n;var d=/^([a-z0-9.+-]+:)/i,h=/:[0-9]*$/,y=["<",">",'"',"`"," ","\r","\n","	"],f=["{","}","|","\\","^","`"].concat(y),g=["'"].concat(f),b=["%","/","?",";","#"].concat(g),v=["/","?","#"],S=255,N=/^[a-z0-9A-Z_-]{0,63}$/,I=/^([a-z0-9A-Z_-]{0,63})(.*)$/,C={javascript:!0,"javascript:":!0},E={javascript:!0,"javascript:":!0},x={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},k=e("querystring");n.prototype.parse=function(e,t,r){if(!u(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e;n=n.trim();var i=d.exec(n);if(i){i=i[0];var o=i.toLowerCase();this.protocol=o,n=n.substr(i.length)}if(r||i||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var a="//"===n.substr(0,2);!a||i&&E[i]||(n=n.substr(2),this.slashes=!0)}if(!E[i]&&(a||i&&!x[i])){for(var s=-1,c=0;c<v.length;c++){var p=n.indexOf(v[c]);-1!==p&&(-1===s||s>p)&&(s=p)}var l,h;h=-1===s?n.lastIndexOf("@"):n.lastIndexOf("@",s),-1!==h&&(l=n.slice(0,h),n=n.slice(h+1),this.auth=decodeURIComponent(l)),s=-1;for(var c=0;c<b.length;c++){var p=n.indexOf(b[c]);-1!==p&&(-1===s||s>p)&&(s=p)}-1===s&&(s=n.length),this.host=n.slice(0,s),n=n.slice(s),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var f=this.hostname.split(/\./),c=0,q=f.length;q>c;c++){var A=f[c];if(A&&!A.match(N)){for(var w="",T=0,R=A.length;R>T;T++)w+=A.charCodeAt(T)>127?"x":A[T];if(!w.match(N)){var P=f.slice(0,c),M=f.slice(c+1),B=A.match(I);B&&(P.push(B[1]),M.unshift(B[2])),M.length&&(n="/"+M.join(".")+n),this.hostname=P.join(".");break}}}if(this.hostname=this.hostname.length>S?"":this.hostname.toLowerCase(),!y){for(var L=this.hostname.split("."),D=[],c=0;c<L.length;++c){var U=L[c];D.push(U.match(/[^A-Za-z0-9_-]/)?"xn--"+m.encode(U):U)}this.hostname=D.join(".")}var _=this.port?":"+this.port:"",z=this.hostname||"";this.host=z+_,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==n[0]&&(n="/"+n))}if(!C[o])for(var c=0,q=g.length;q>c;c++){var O=g[c],K=encodeURIComponent(O);K===O&&(K=escape(O)),n=n.split(O).join(K)}var j=n.indexOf("#");-1!==j&&(this.hash=n.substr(j),n=n.slice(0,j));var F=n.indexOf("?");if(-1!==F?(this.search=n.substr(F),this.query=n.substr(F+1),t&&(this.query=k.parse(this.query)),n=n.slice(0,F)):t&&(this.search="",this.query={}),n&&(this.pathname=n),x[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var _=this.pathname||"",U=this.search||"";this.path=_+U}return this.href=this.format(),this},n.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&c(this.query)&&Object.keys(this.query).length&&(o=k.stringify(this.query));var a=this.search||o&&"?"+o||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||x[t])&&i!==!1?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),r=r.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),a=a.replace("#","%23"),t+i+r+a+n},n.prototype.resolve=function(e){return this.resolveObject(i(e,!1,!0)).format()},n.prototype.resolveObject=function(e){if(u(e)){var t=new n;t.parse(e,!1,!0),e=t}var r=new n;if(Object.keys(this).forEach(function(e){r[e]=this[e]},this),r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol)return Object.keys(e).forEach(function(t){"protocol"!==t&&(r[t]=e[t])}),x[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r;if(e.protocol&&e.protocol!==r.protocol){if(!x[e.protocol])return Object.keys(e).forEach(function(t){r[t]=e[t]}),r.href=r.format(),r;if(r.protocol=e.protocol,e.host||E[e.protocol])r.pathname=e.pathname;else{for(var i=(e.pathname||"").split("/");i.length&&!(e.host=i.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),r.pathname=i.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var o=r.pathname||"",a=r.search||"";r.path=o+a}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var s=r.pathname&&"/"===r.pathname.charAt(0),c=e.host||e.pathname&&"/"===e.pathname.charAt(0),m=c||s||r.host&&e.pathname,d=m,h=r.pathname&&r.pathname.split("/")||[],i=e.pathname&&e.pathname.split("/")||[],y=r.protocol&&!x[r.protocol];if(y&&(r.hostname="",r.port=null,r.host&&(""===h[0]?h[0]=r.host:h.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===i[0]?i[0]=e.host:i.unshift(e.host)),e.host=null),m=m&&(""===i[0]||""===h[0])),c)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,h=i;else if(i.length)h||(h=[]),h.pop(),h=h.concat(i),r.search=e.search,r.query=e.query;else if(!l(e.search)){if(y){r.hostname=r.host=h.shift();var f=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;f&&(r.auth=f.shift(),r.host=r.hostname=f.shift())}return r.search=e.search,r.query=e.query,p(r.pathname)&&p(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!h.length)return r.pathname=null,r.path=r.search?"/"+r.search:null,r.href=r.format(),r;for(var g=h.slice(-1)[0],b=(r.host||e.host)&&("."===g||".."===g)||""===g,v=0,S=h.length;S>=0;S--)g=h[S],"."==g?h.splice(S,1):".."===g?(h.splice(S,1),v++):v&&(h.splice(S,1),v--);if(!m&&!d)for(;v--;v)h.unshift("..");!m||""===h[0]||h[0]&&"/"===h[0].charAt(0)||h.unshift(""),b&&"/"!==h.join("/").substr(-1)&&h.push("");var N=""===h[0]||h[0]&&"/"===h[0].charAt(0);if(y){r.hostname=r.host=N?"":h.length?h.shift():"";var f=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;f&&(r.auth=f.shift(),r.host=r.hostname=f.shift())}return m=m||r.host&&h.length,m&&!N&&h.unshift(""),h.length?r.pathname=h.join("/"):(r.pathname=null,r.path=null),p(r.pathname)&&p(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var e=this.host,t=h.exec(e);t&&(t=t[0],":"!==t&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},{punycode:64,querystring:67}],69:[function(e,t){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],70:[function(e,t,r){(function(t,n){function i(e,t){var n={seen:[],stylize:a};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),y(t)?n.showHidden=t:t&&r._extend(n,t),N(n.showHidden)&&(n.showHidden=!1),N(n.depth)&&(n.depth=2),N(n.colors)&&(n.colors=!1),N(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=o),u(n,e,n.depth)}function o(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function a(e){return e}function s(e){var t={};return e.forEach(function(e){t[e]=!0}),t}function u(e,t,n){if(e.customInspect&&t&&k(t.inspect)&&t.inspect!==r.inspect&&(!t.constructor||t.constructor.prototype!==t)){var i=t.inspect(n,e);return v(i)||(i=u(e,i,n)),i}var o=c(e,t);if(o)return o;var a=Object.keys(t),y=s(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(t)),x(t)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return p(t);if(0===a.length){if(k(t)){var f=t.name?": "+t.name:"";return e.stylize("[Function"+f+"]","special")}if(I(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(E(t))return e.stylize(Date.prototype.toString.call(t),"date");if(x(t))return p(t)}var g="",b=!1,S=["{","}"];if(h(t)&&(b=!0,S=["[","]"]),k(t)){var N=t.name?": "+t.name:"";g=" [Function"+N+"]"}if(I(t)&&(g=" "+RegExp.prototype.toString.call(t)),E(t)&&(g=" "+Date.prototype.toUTCString.call(t)),x(t)&&(g=" "+p(t)),0===a.length&&(!b||0==t.length))return S[0]+g+S[1];if(0>n)return I(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var C;return C=b?l(e,t,n,y,a):a.map(function(r){return m(e,t,n,y,r,b)}),e.seen.pop(),d(C,g,S)}function c(e,t){if(N(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return b(t)?e.stylize(""+t,"number"):y(t)?e.stylize(""+t,"boolean"):f(t)?e.stylize("null","null"):void 0}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function l(e,t,r,n,i){for(var o=[],a=0,s=t.length;s>a;++a)o.push(R(t,String(a))?m(e,t,r,n,String(a),!0):"");return i.forEach(function(i){i.match(/^\d+$/)||o.push(m(e,t,r,n,i,!0))}),o}function m(e,t,r,n,i,o){var a,s,c;if(c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},c.get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),R(n,i)||(a="["+i+"]"),s||(e.seen.indexOf(c.value)<0?(s=f(r)?u(e,c.value,null):u(e,c.value,r-1),s.indexOf("\n")>-1&&(s=o?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n"))):s=e.stylize("[Circular]","special")),N(a)){if(o&&i.match(/^\d+$/))return s;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function d(e,t,r){var n=0,i=e.reduce(function(e,t){return n++,t.indexOf("\n")>=0&&n++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function h(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function f(e){return null===e}function g(e){return null==e}function b(e){return"number"==typeof e}function v(e){return"string"==typeof e}function S(e){return"symbol"==typeof e}function N(e){return void 0===e}function I(e){return C(e)&&"[object RegExp]"===A(e)}function C(e){return"object"==typeof e&&null!==e}function E(e){return C(e)&&"[object Date]"===A(e)}function x(e){return C(e)&&("[object Error]"===A(e)||e instanceof Error)}function k(e){return"function"==typeof e}function q(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function A(e){return Object.prototype.toString.call(e)}function w(e){return 10>e?"0"+e.toString(10):e.toString(10)}function T(){var e=new Date,t=[w(e.getHours()),w(e.getMinutes()),w(e.getSeconds())].join(":");return[e.getDate(),L[e.getMonth()],t].join(" ")}function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var P=/%[sdj%]/g;r.format=function(e){if(!v(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(i(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,o=n.length,a=String(e).replace(P,function(e){if("%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return e}}),s=n[r];o>r;s=n[++r])a+=f(s)||!C(s)?" "+s:" "+i(s);return a},r.deprecate=function(e,i){function o(){if(!a){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),a=!0}return e.apply(this,arguments)}if(N(n.process))return function(){return r.deprecate(e,i).apply(this,arguments)};if(t.noDeprecation===!0)return e;var a=!1;return o};var M,B={};r.debuglog=function(e){if(N(M)&&(M=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!B[e])if(new RegExp("\\b"+e+"\\b","i").test(M)){var n=t.pid;B[e]=function(){var t=r.format.apply(r,arguments);console.error("%s %d: %s",e,n,t)}}else B[e]=function(){};return B[e]},r.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},r.isArray=h,r.isBoolean=y,r.isNull=f,r.isNullOrUndefined=g,r.isNumber=b,r.isString=v,r.isSymbol=S,r.isUndefined=N,r.isRegExp=I,r.isObject=C,r.isDate=E,r.isError=x,r.isFunction=k,r.isPrimitive=q,r.isBuffer=e("./support/isBuffer");var L=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];r.log=function(){console.log("%s - %s",T(),r.format.apply(r,arguments))},r.inherits=e("inherits"),r._extend=function(e,t){if(!t||!C(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}).call(this,e("FWaASH"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":69,FWaASH:63,inherits:62}],71:[function(e,t){(function(){var r,n;n=e("./XMLFragment"),r=function(){function e(e,t,r){var i,o,a;if(this.children=[],this.rootObject=null,this.is(e,"Object")&&(a=[e,t],t=a[0],r=a[1],e=null),null!=e&&(e=""+e||"",null==t&&(t={version:"1.0"})),null!=t&&null==t.version)throw new Error("Version number is required");if(null!=t){if(t.version=""+t.version||"",!t.version.match(/1\.[0-9]+/))throw new Error("Invalid version number: "+t.version);if(i={version:t.version},null!=t.encoding){if(t.encoding=""+t.encoding||"",!t.encoding.match(/[A-Za-z](?:[A-Za-z0-9._-]|-)*/))throw new Error("Invalid encoding: "+t.encoding);i.encoding=t.encoding}null!=t.standalone&&(i.standalone=t.standalone?"yes":"no"),o=new n(this,"?xml",i),this.children.push(o)}null!=r&&(i={},null!=e&&(i.name=e),null!=r.ext&&(r.ext=""+r.ext||"",i.ext=r.ext),o=new n(this,"!DOCTYPE",i),this.children.push(o)),null!=e&&this.begin(e)}return e.prototype.begin=function(t,r,i){var o,a;if(null==t)throw new Error("Root element needs a name");return this.rootObject&&(this.children=[],this.rootObject=null),null!=r?(o=new e(t,r,i),o.root()):(t=""+t||"",a=new n(this,t,{}),a.isRoot=!0,a.documentObject=this,this.children.push(a),this.rootObject=a,a)},e.prototype.root=function(){return this.rootObject},e.prototype.end=function(e){return toString(e)},e.prototype.toString=function(e){var t,r,n,i,o;for(r="",o=this.children,n=0,i=o.length;i>n;n++)t=o[n],r+=t.toString(e);return r},e.prototype.is=function(e,t){var r;return r=Object.prototype.toString.call(e).slice(8,-1),null!=e&&r===t},e}(),t.exports=r}).call(this)},{"./XMLFragment":72}],72:[function(e,t){(function(){var e,r={}.hasOwnProperty;e=function(){function e(e,t,r,n){this.isRoot=!1,this.documentObject=null,this.parent=e,this.name=t,this.attributes=r,this.value=n,this.children=[]}return e.prototype.element=function(t,n,i){var o,a,s,u,c;if(null==t)throw new Error("Missing element name");t=""+t||"",this.assertLegalChar(t),null==n&&(n={}),this.is(n,"String")&&this.is(i,"Object")?(u=[i,n],n=u[0],i=u[1]):this.is(n,"String")&&(c=[{},n],n=c[0],i=c[1]);for(a in n)r.call(n,a)&&(s=n[a],s=""+s||"",n[a]=this.escape(s));return o=new e(this,t,n),null!=i&&(i=""+i||"",i=this.escape(i),this.assertLegalChar(i),o.raw(i)),this.children.push(o),o},e.prototype.insertBefore=function(t,n,i){var o,a,s,u,c,p;if(this.isRoot)throw new Error("Cannot insert elements at root level");if(null==t)throw new Error("Missing element name");t=""+t||"",this.assertLegalChar(t),null==n&&(n={}),this.is(n,"String")&&this.is(i,"Object")?(c=[i,n],n=c[0],i=c[1]):this.is(n,"String")&&(p=[{},n],n=p[0],i=p[1]);for(s in n)r.call(n,s)&&(u=n[s],u=""+u||"",n[s]=this.escape(u));return o=new e(this.parent,t,n),null!=i&&(i=""+i||"",i=this.escape(i),this.assertLegalChar(i),o.raw(i)),a=this.parent.children.indexOf(this),this.parent.children.splice(a,0,o),o},e.prototype.insertAfter=function(t,n,i){var o,a,s,u,c,p;if(this.isRoot)throw new Error("Cannot insert elements at root level");if(null==t)throw new Error("Missing element name");t=""+t||"",this.assertLegalChar(t),null==n&&(n={}),this.is(n,"String")&&this.is(i,"Object")?(c=[i,n],n=c[0],i=c[1]):this.is(n,"String")&&(p=[{},n],n=p[0],i=p[1]);for(s in n)r.call(n,s)&&(u=n[s],u=""+u||"",n[s]=this.escape(u));return o=new e(this.parent,t,n),null!=i&&(i=""+i||"",i=this.escape(i),this.assertLegalChar(i),o.raw(i)),a=this.parent.children.indexOf(this),this.parent.children.splice(a+1,0,o),o},e.prototype.remove=function(){var e,t;if(this.isRoot)throw new Error("Cannot remove the root element");return e=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[e,e-e+1].concat(t=[])),t,this.parent},e.prototype.text=function(t){var r;if(null==t)throw new Error("Missing element text");return t=""+t||"",t=this.escape(t),this.assertLegalChar(t),r=new e(this,"",{},t),this.children.push(r),this},e.prototype.cdata=function(t){var r;if(null==t)throw new Error("Missing CDATA text");if(t=""+t||"",this.assertLegalChar(t),t.match(/]]>/))throw new Error("Invalid CDATA text: "+t);return r=new e(this,"",{},"<![CDATA["+t+"]]>"),this.children.push(r),this},e.prototype.comment=function(t){var r;if(null==t)throw new Error("Missing comment text");if(t=""+t||"",t=this.escape(t),this.assertLegalChar(t),t.match(/--/))throw new Error("Comment text cannot contain double-hypen: "+t);return r=new e(this,"",{},"<!-- "+t+" -->"),this.children.push(r),this},e.prototype.raw=function(t){var r;if(null==t)throw new Error("Missing raw text");return t=""+t||"",r=new e(this,"",{},t),this.children.push(r),this},e.prototype.up=function(){if(this.isRoot)throw new Error("This node has no parent. Use doc() if you need to get the document object.");return this.parent},e.prototype.root=function(){var e;if(this.isRoot)return this;for(e=this.parent;!e.isRoot;)e=e.parent;return e},e.prototype.document=function(){return this.root().documentObject},e.prototype.end=function(e){return this.document().toString(e)},e.prototype.prev=function(){var e;if(this.isRoot)throw new Error("Root node has no siblings");if(e=this.parent.children.indexOf(this),1>e)throw new Error("Already at the first node");return this.parent.children[e-1]},e.prototype.next=function(){var e;if(this.isRoot)throw new Error("Root node has no siblings");if(e=this.parent.children.indexOf(this),-1===e||e===this.parent.children.length-1)throw new Error("Already at the last node");return this.parent.children[e+1]},e.prototype.clone=function(t){var r;return r=new e(this.parent,this.name,this.attributes,this.value),t&&this.children.forEach(function(e){var n;return n=e.clone(t),n.parent=r,r.children.push(n)}),r},e.prototype.importXMLBuilder=function(e){var t;return t=e.root().clone(!0),t.parent=this,this.children.push(t),t.isRoot=!1,this},e.prototype.attribute=function(e,t){var r;if(null==e)throw new Error("Missing attribute name");if(null==t)throw new Error("Missing attribute value");return e=""+e||"",t=""+t||"",null==(r=this.attributes)&&(this.attributes={}),this.attributes[e]=this.escape(t),this},e.prototype.removeAttribute=function(e){if(null==e)throw new Error("Missing attribute name");return e=""+e||"",delete this.attributes[e],this},e.prototype.toString=function(e,t){var r,n,i,o,a,s,u,c,p,l,m,d;s=null!=e&&e.pretty||!1,o=null!=e&&e.indent||"  ",a=null!=e&&e.newline||"\n",t||(t=0),c=new Array(t+1).join(o),u="",s&&(u+=c),u+=null==this.value?"<"+this.name:""+this.value,m=this.attributes;for(r in m)n=m[r],u+="!DOCTYPE"===this.name?" "+n:" "+r+'="'+n+'"';if(0===this.children.length)null==this.value&&(u+="?xml"===this.name?"?>":"!DOCTYPE"===this.name?">":"/>"),s&&(u+=a);else if(s&&1===this.children.length&&this.children[0].value)u+=">",u+=this.children[0].value,u+="</"+this.name+">",u+=a;else{for(u+=">",s&&(u+=a),d=this.children,p=0,l=d.length;l>p;p++)i=d[p],u+=i.toString(e,t+1);s&&(u+=c),u+="</"+this.name+">",s&&(u+=a)}return u},e.prototype.escape=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/"/g,"&quot;")},e.prototype.assertLegalChar=function(e){var t,r;if(t=/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/,r=e.match(t))throw new Error("Invalid character ("+r+") in string: "+e)},e.prototype.is=function(e,t){var r;return r=Object.prototype.toString.call(e).slice(8,-1),null!=e&&r===t},e.prototype.ele=function(e,t,r){return this.element(e,t,r)},e.prototype.txt=function(e){return this.text(e)},e.prototype.dat=function(e){return this.cdata(e)},e.prototype.att=function(e,t){return this.attribute(e,t)},e.prototype.com=function(e){return this.comment(e)},e.prototype.doc=function(){return this.document()},e.prototype.e=function(e,t,r){return this.element(e,t,r)},e.prototype.t=function(e){return this.text(e)},e.prototype.d=function(e){return this.cdata(e)},e.prototype.a=function(e,t){return this.attribute(e,t)},e.prototype.c=function(e){return this.comment(e)},e.prototype.r=function(e){return this.raw(e)},e.prototype.u=function(){return this.up()},e}(),t.exports=e}).call(this)},{}],73:[function(e,t){(function(){var r;r=e("./XMLBuilder"),t.exports.create=function(e,t,n){return null!=e?new r(e,t,n).root():new r}}).call(this)},{"./XMLBuilder":71}]},{},[1]);

//////////////////////////////////////

'use strict';

// Last time updated: 2020-05-17 5:04:38 PM UTC

// ________________
// RecordRTC v5.6.1

// Open-Sourced: https://github.com/muaz-khan/RecordRTC

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

// ____________
// RecordRTC.js

/**
 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows. 
 * @summary Record audio, video or screen inside the browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTC
 * @class
 * @example
 * var recorder = RecordRTC(mediaStream or [arrayOfMediaStream], {
 *     type: 'video', // audio or video or gif or canvas
 *     recorderType: MediaStreamRecorder || CanvasRecorder || StereoAudioRecorder || Etc
 * });
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, desiredSampRate: 16000, video: HTMLVideoElement, etc.}
 */

function RecordRTC(mediaStream, config) {
    if (!mediaStream) {
        throw 'First parameter is required.';
    }

    config = config || {
        type: 'video'
    };

    config = new RecordRTCConfiguration(mediaStream, config);

    // a reference to user's recordRTC object
    var self = this;

    function startRecording(config2) {
        if (!config.disableLogs) {
            console.log('RecordRTC version: ', self.version);
        }

        if (!!config2) {
            // allow users to set options using startRecording method
            // config2 is similar to main "config" object (second parameter over RecordRTC constructor)
            config = new RecordRTCConfiguration(mediaStream, config2);
        }

        if (!config.disableLogs) {
            console.log('started recording ' + config.type + ' stream.');
        }

        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder.record();

            setState('recording');

            if (self.recordingDuration) {
                handleRecordingDuration();
            }
            return self;
        }

        initRecorder(function() {
            if (self.recordingDuration) {
                handleRecordingDuration();
            }
        });

        return self;
    }

    function initRecorder(initCallback) {
        if (initCallback) {
            config.initCallback = function() {
                initCallback();
                initCallback = config.initCallback = null; // recorder.initRecorder should be call-backed once.
            };
        }

        var Recorder = new GetRecorderType(mediaStream, config);

        mediaRecorder = new Recorder(mediaStream, config);
        mediaRecorder.record();

        setState('recording');

        if (!config.disableLogs) {
            console.log('Initialized recorderType:', mediaRecorder.constructor.name, 'for output-type:', config.type);
        }
    }

    function stopRecording(callback) {
        callback = callback || function() {};

        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state === 'paused') {
            self.resumeRecording();

            setTimeout(function() {
                stopRecording(callback);
            }, 1);
            return;
        }

        if (self.state !== 'recording' && !config.disableLogs) {
            console.warn('Recording state should be: "recording", however current state is: ', self.state);
        }

        if (!config.disableLogs) {
            console.log('Stopped recording ' + config.type + ' stream.');
        }

        if (config.type !== 'gif') {
            mediaRecorder.stop(_callback);
        } else {
            mediaRecorder.stop();
            _callback();
        }

        setState('stopped');

        function _callback(__blob) {
            if (!mediaRecorder) {
                if (typeof callback.call === 'function') {
                    callback.call(self, '');
                } else {
                    callback('');
                }
                return;
            }

            Object.keys(mediaRecorder).forEach(function(key) {
                if (typeof mediaRecorder[key] === 'function') {
                    return;
                }

                self[key] = mediaRecorder[key];
            });

            var blob = mediaRecorder.blob;

            if (!blob) {
                if (__blob) {
                    mediaRecorder.blob = blob = __blob;
                } else {
                    throw 'Recording failed.';
                }
            }

            if (blob && !config.disableLogs) {
                console.log(blob.type, '->', bytesToSize(blob.size));
            }

            if (callback) {
                var url;

                try {
                    url = URL.createObjectURL(blob);
                } catch (e) {}

                if (typeof callback.call === 'function') {
                    callback.call(self, url);
                } else {
                    callback(url);
                }
            }

            if (!config.autoWriteToDisk) {
                return;
            }

            getDataURL(function(dataURL) {
                var parameter = {};
                parameter[config.type + 'Blob'] = dataURL;
                DiskStorage.Store(parameter);
            });
        }
    }

    function pauseRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'recording') {
            if (!config.disableLogs) {
                console.warn('Unable to pause the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('paused');

        mediaRecorder.pause();

        if (!config.disableLogs) {
            console.log('Paused recording.');
        }
    }

    function resumeRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'paused') {
            if (!config.disableLogs) {
                console.warn('Unable to resume the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('recording');

        // not all libs have this method yet
        mediaRecorder.resume();

        if (!config.disableLogs) {
            console.log('Resumed recording.');
        }
    }

    function readFile(_blob) {
        postMessage(new FileReaderSync().readAsDataURL(_blob));
    }

    function getDataURL(callback, _mediaRecorder) {
        if (!callback) {
            throw 'Pass a callback function over getDataURL.';
        }

        var blob = _mediaRecorder ? _mediaRecorder.blob : (mediaRecorder || {}).blob;

        if (!blob) {
            if (!config.disableLogs) {
                console.warn('Blob encoder did not finish its job yet.');
            }

            setTimeout(function() {
                getDataURL(callback, _mediaRecorder);
            }, 1000);
            return;
        }

        if (typeof Worker !== 'undefined' && !navigator.mozGetUserMedia) {
            var webWorker = processInWebWorker(readFile);

            webWorker.onmessage = function(event) {
                callback(event.data);
            };

            webWorker.postMessage(blob);
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function(event) {
                callback(event.target.result);
            };
        }

        function processInWebWorker(_function) {
            try {
                var blob = URL.createObjectURL(new Blob([_function.toString(),
                    'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
                ], {
                    type: 'application/javascript'
                }));

                var worker = new Worker(blob);
                URL.revokeObjectURL(blob);
                return worker;
            } catch (e) {}
        }
    }

    function handleRecordingDuration(counter) {
        counter = counter || 0;

        if (self.state === 'paused') {
            setTimeout(function() {
                handleRecordingDuration(counter);
            }, 1000);
            return;
        }

        if (self.state === 'stopped') {
            return;
        }

        if (counter >= self.recordingDuration) {
            stopRecording(self.onRecordingStopped);
            return;
        }

        counter += 1000; // 1-second

        setTimeout(function() {
            handleRecordingDuration(counter);
        }, 1000);
    }

    function setState(state) {
        if (!self) {
            return;
        }

        self.state = state;

        if (typeof self.onStateChanged.call === 'function') {
            self.onStateChanged.call(self, state);
        } else {
            self.onStateChanged(state);
        }
    }

    var WARNING = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + config.type + ' recorder.';

    function warningLog() {
        if (config.disableLogs === true) {
            return;
        }

        console.warn(WARNING);
    }

    var mediaRecorder;

    var returnObject = {
        /**
         * This method starts the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var recorder = RecordRTC(mediaStream, {
         *     type: 'video'
         * });
         * recorder.startRecording();
         */
        startRecording: startRecording,

        /**
         * This method stops the recording. It is strongly recommended to get "blob" or "URI" inside the callback to make sure all recorders finished their job.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     // use either "this" or "recorder" object; both are identical
         *     video.src = this.toURL();
         *     var blob = this.getBlob();
         * });
         */
        stopRecording: stopRecording,

        /**
         * This method pauses the recording. You can resume recording using "resumeRecording" method.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Firefox is unable to pause the recording. Fix it.
         * @example
         * recorder.pauseRecording();  // pause the recording
         * recorder.resumeRecording(); // resume again
         */
        pauseRecording: pauseRecording,

        /**
         * This method resumes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.pauseRecording();  // first of all, pause the recording
         * recorder.resumeRecording(); // now resume it
         */
        resumeRecording: resumeRecording,

        /**
         * This method initializes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * recorder.initRecorder();
         */
        initRecorder: initRecorder,

        /**
         * Ask RecordRTC to auto-stop the recording after 5 minutes.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var fiveMinutes = 5 * 1000 * 60;
         * recorder.setRecordingDuration(fiveMinutes, function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         * 
         * // or otherwise
         * recorder.setRecordingDuration(fiveMinutes).onRecordingStopped(function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         */
        setRecordingDuration: function(recordingDuration, callback) {
            if (typeof recordingDuration === 'undefined') {
                throw 'recordingDuration is required.';
            }

            if (typeof recordingDuration !== 'number') {
                throw 'recordingDuration must be a number.';
            }

            self.recordingDuration = recordingDuration;
            self.onRecordingStopped = callback || function() {};

            return {
                onRecordingStopped: function(callback) {
                    self.onRecordingStopped = callback;
                }
            };
        },

        /**
         * This method can be used to clear/reset all the recorded data.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Figure out the difference between "reset" and "clearRecordedData" methods.
         * @example
         * recorder.clearRecordedData();
         */
        clearRecordedData: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            mediaRecorder.clearRecordedData();

            if (!config.disableLogs) {
                console.log('Cleared old recorded data.');
            }
        },

        /**
         * Get the recorded blob. Use this method inside the "stopRecording" callback.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.getBlob();
         *
         *     var file = new File([blob], 'filename.webm', {
         *         type: 'video/webm'
         *     });
         *
         *     var formData = new FormData();
         *     formData.append('file', file); // upload "File" object rather than a "Blob"
         *     uploadToServer(formData);
         * });
         * @returns {Blob} Returns recorded data as "Blob" object.
         */
        getBlob: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return mediaRecorder.blob;
        },

        /**
         * Get data-URI instead of Blob.
         * @param {function} callback - Callback to get the Data-URI.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     recorder.getDataURL(function(dataURI) {
         *         video.src = dataURI;
         *     });
         * });
         */
        getDataURL: getDataURL,

        /**
         * Get virtual/temporary URL. Usage of this URL is limited to current tab.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     video.src = this.toURL();
         * });
         * @returns {String} Returns a virtual/temporary URL for the recorded "Blob".
         */
        toURL: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return URL.createObjectURL(mediaRecorder.blob);
        },

        /**
         * Get internal recording object (i.e. internal module) e.g. MutliStreamRecorder, MediaStreamRecorder, StereoAudioRecorder or WhammyRecorder etc.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var internalRecorder = recorder.getInternalRecorder();
         * if(internalRecorder instanceof MultiStreamRecorder) {
         *     internalRecorder.addStreams([newAudioStream]);
         *     internalRecorder.resetVideoStreams([screenStream]);
         * }
         * @returns {Object} Returns internal recording object.
         */
        getInternalRecorder: function() {
            return mediaRecorder;
        },

        /**
         * Invoke save-as dialog to save the recorded blob into your disk.
         * @param {string} fileName - Set your own file name.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     this.save('file-name');
         *
         *     // or manually:
         *     invokeSaveAsDialog(this.getBlob(), 'filename.webm');
         * });
         */
        save: function(fileName) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            invokeSaveAsDialog(mediaRecorder.blob, fileName);
        },

        /**
         * This method gets a blob from indexed-DB storage.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.getFromDisk(function(dataURL) {
         *     video.src = dataURL;
         * });
         */
        getFromDisk: function(callback) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            RecordRTC.getFromDisk(config.type, callback);
        },

        /**
         * This method appends an array of webp images to the recorded video-blob. It takes an "array" object.
         * @type {Array.<Array>}
         * @param {Array} arrayOfWebPImages - Array of webp images.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * var arrayOfWebPImages = [];
         * arrayOfWebPImages.push({
         *     duration: index,
         *     image: 'data:image/webp;base64,...'
         * });
         * recorder.setAdvertisementArray(arrayOfWebPImages);
         */
        setAdvertisementArray: function(arrayOfWebPImages) {
            config.advertisement = [];

            var length = arrayOfWebPImages.length;
            for (var i = 0; i < length; i++) {
                config.advertisement.push({
                    duration: i,
                    image: arrayOfWebPImages[i]
                });
            }
        },

        /**
         * It is equivalent to <code class="str">"recorder.getBlob()"</code> method. Usage of "getBlob" is recommended, though.
         * @property {Blob} blob - Recorded Blob can be accessed using this property.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.blob;
         *
         *     // below one is recommended
         *     var blob = this.getBlob();
         * });
         */
        blob: null,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} bufferSize - Buffer-size used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used this buffer-size: ' + this.bufferSize);
         * });
         */
        bufferSize: 0,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} sampleRate - Sample-rates used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used these sample-rates: ' + this.sampleRate);
         * });
         */
        sampleRate: 0,

        /**
         * {recorderType:StereoAudioRecorder} returns ArrayBuffer object.
         * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var arrayBuffer = this.buffer;
         *     alert(arrayBuffer.byteLength);
         * });
         */
        buffer: null,

        /**
         * This method resets the recorder. So that you can reuse single recorder instance many times.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.reset();
         * recorder.startRecording();
         */
        reset: function() {
            if (self.state === 'recording' && !config.disableLogs) {
                console.warn('Stop an active recorder.');
            }

            if (mediaRecorder && typeof mediaRecorder.clearRecordedData === 'function') {
                mediaRecorder.clearRecordedData();
            }
            mediaRecorder = null;
            setState('inactive');
            self.blob = null;
        },

        /**
         * This method is called whenever recorder's state changes. Use this as an "event".
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.onStateChanged = function(state) {
         *     console.log('Recorder state: ', state);
         * };
         */
        onStateChanged: function(state) {
            if (!config.disableLogs) {
                console.log('Recorder state changed:', state);
            }
        },

        /**
         * A recorder can have inactive, recording, paused or stopped states.
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * // this looper function will keep you updated about the recorder's states.
         * (function looper() {
         *     document.querySelector('h1').innerHTML = 'Recorder\'s state is: ' + recorder.state;
         *     if(recorder.state === 'stopped') return; // ignore+stop
         *     setTimeout(looper, 1000); // update after every 3-seconds
         * })();
         * recorder.startRecording();
         */
        state: 'inactive',

        /**
         * Get recorder's readonly state.
         * @method
         * @memberof RecordRTC
         * @example
         * var state = recorder.getState();
         * @returns {String} Returns recording state.
         */
        getState: function() {
            return self.state;
        },

        /**
         * Destroy RecordRTC instance. Clear all recorders and objects.
         * @method
         * @memberof RecordRTC
         * @example
         * recorder.destroy();
         */
        destroy: function() {
            var disableLogsCache = config.disableLogs;

            config = {
                disableLogs: true
            };
            self.reset();
            setState('destroyed');
            returnObject = self = null;

            if (Storage.AudioContextConstructor) {
                Storage.AudioContextConstructor.close();
                Storage.AudioContextConstructor = null;
            }

            config.disableLogs = disableLogsCache;

            if (!config.disableLogs) {
                console.log('RecordRTC is destroyed.');
            }
        },

        /**
         * RecordRTC version number
         * @property {String} version - Release version number.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * alert(recorder.version);
         */
        version: '5.6.1'
    };

    if (!this) {
        self = returnObject;
        return returnObject;
    }

    // if someone wants to use RecordRTC with the "new" keyword.
    for (var prop in returnObject) {
        this[prop] = returnObject[prop];
    }

    self = this;

    return returnObject;
}

RecordRTC.version = '5.6.1';

if (typeof module !== 'undefined' /* && !!module.exports*/ ) {
    module.exports = RecordRTC;
}

if (typeof define === 'function' && define.amd) {
    define('RecordRTC', [], function() {
        return RecordRTC;
    });
}

RecordRTC.getFromDisk = function(type, callback) {
    if (!callback) {
        throw 'callback is mandatory.';
    }

    console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
    DiskStorage.Fetch(function(dataURL, _type) {
        if (type !== 'all' && _type === type + 'Blob' && callback) {
            callback(dataURL);
        }

        if (type === 'all' && callback) {
            callback(dataURL, _type.replace('Blob', ''));
        }
    });
};

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof RecordRTC
 * @example
 * RecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
RecordRTC.writeToDisk = function(options) {
    console.log('Writing recorded blob(s) to disk!');
    options = options || {};
    if (options.audio && options.video && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                options.gif.getDataURL(function(gifDataURL) {
                    DiskStorage.Store({
                        audioBlob: audioDataURL,
                        videoBlob: videoDataURL,
                        gifBlob: gifDataURL
                    });
                });
            });
        });
    } else if (options.audio && options.video) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    videoBlob: videoDataURL
                });
            });
        });
    } else if (options.audio && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.video && options.gif) {
        options.video.getDataURL(function(videoDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    videoBlob: videoDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.audio) {
        options.audio.getDataURL(function(audioDataURL) {
            DiskStorage.Store({
                audioBlob: audioDataURL
            });
        });
    } else if (options.video) {
        options.video.getDataURL(function(videoDataURL) {
            DiskStorage.Store({
                videoBlob: videoDataURL
            });
        });
    } else if (options.gif) {
        options.gif.getDataURL(function(gifDataURL) {
            DiskStorage.Store({
                gifBlob: gifDataURL
            });
        });
    }
};

// __________________________
// RecordRTC-Configuration.js

/**
 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCConfiguration
 * @class
 * @example
 * var options = RecordRTCConfiguration(mediaStream, options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, getNativeBlob:true, etc.}
 */

function RecordRTCConfiguration(mediaStream, config) {
    if (!config.recorderType && !config.type) {
        if (!!config.audio && !!config.video) {
            config.type = 'video';
        } else if (!!config.audio && !config.video) {
            config.type = 'audio';
        }
    }

    if (config.recorderType && !config.type) {
        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder || (typeof WebAssemblyRecorder !== 'undefined' && config.recorderType === WebAssemblyRecorder)) {
            config.type = 'video';
        } else if (config.recorderType === GifRecorder) {
            config.type = 'gif';
        } else if (config.recorderType === StereoAudioRecorder) {
            config.type = 'audio';
        } else if (config.recorderType === MediaStreamRecorder) {
            if (getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (!getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (getTracks(mediaStream, 'audio').length && !getTracks(mediaStream, 'video').length) {
                config.type = 'audio';
            } else {
                // config.type = 'UnKnown';
            }
        }
    }

    if (typeof MediaStreamRecorder !== 'undefined' && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (!config.mimeType) {
            config.mimeType = 'video/webm';
        }

        if (!config.type) {
            config.type = config.mimeType.split('/')[0];
        }

        if (!config.bitsPerSecond) {
            // config.bitsPerSecond = 128000;
        }
    }

    // consider default type=audio
    if (!config.type) {
        if (config.mimeType) {
            config.type = config.mimeType.split('/')[0];
        }
        if (!config.type) {
            config.type = 'audio';
        }
    }

    return config;
}

// __________________
// GetRecorderType.js

/**
 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
 * @summary It returns best recorder-type available for your browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef GetRecorderType
 * @class
 * @example
 * var RecorderType = GetRecorderType(options);
 * var recorder = new RecorderType(options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 */

function GetRecorderType(mediaStream, config) {
    var recorder;

    // StereoAudioRecorder can work with all three: Edge, Firefox and Chrome
    // todo: detect if it is Edge, then auto use: StereoAudioRecorder
    if (isChrome || isEdge || isOpera) {
        // Media Stream Recording API has not been implemented in chrome yet;
        // That's why using WebAudio API to record stereo audio in WAV format
        recorder = StereoAudioRecorder;
    }

    if (typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype && !isChrome) {
        recorder = MediaStreamRecorder;
    }

    // video recorder (in WebM format)
    if (config.type === 'video' && (isChrome || isOpera)) {
        recorder = WhammyRecorder;

        if (typeof WebAssemblyRecorder !== 'undefined' && typeof ReadableStream !== 'undefined') {
            recorder = WebAssemblyRecorder;
        }
    }

    // video recorder (in Gif format)
    if (config.type === 'gif') {
        recorder = GifRecorder;
    }

    // html2canvas recording!
    if (config.type === 'canvas') {
        recorder = CanvasRecorder;
    }

    if (isMediaRecorderCompatible() && recorder !== CanvasRecorder && recorder !== GifRecorder && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (getTracks(mediaStream, 'video').length || getTracks(mediaStream, 'audio').length) {
            // audio-only recording
            if (config.type === 'audio') {
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('audio/webm')) {
                    recorder = MediaStreamRecorder;
                }
                // else recorder = StereoAudioRecorder;
            } else {
                // video or screen tracks
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('video/webm')) {
                    recorder = MediaStreamRecorder;
                }
            }
        }
    }

    if (mediaStream instanceof Array && mediaStream.length) {
        recorder = MultiStreamRecorder;
    }

    if (config.recorderType) {
        recorder = config.recorderType;
    }

    if (!config.disableLogs && !!recorder && !!recorder.name) {
        console.log('Using recorderType:', recorder.name || recorder.constructor.name);
    }

    if (!recorder && isSafari) {
        recorder = MediaStreamRecorder;
    }

    return recorder;
}

// _____________
// MRecordRTC.js

/**
 * MRecordRTC runs on top of {@link RecordRTC} to bring multiple recordings in a single place, by providing simple API.
 * @summary MRecordRTC stands for "Multiple-RecordRTC".
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef MRecordRTC
 * @class
 * @example
 * var recorder = new MRecordRTC();
 * recorder.addStream(MediaStream);
 * recorder.mediaType = {
 *     audio: true, // or StereoAudioRecorder or MediaStreamRecorder
 *     video: true, // or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
 *     gif: true    // or GifRecorder
 * };
 * // mimeType is optional and should be set only in advance cases.
 * recorder.mimeType = {
 *     audio: 'audio/wav',
 *     video: 'video/webm',
 *     gif:   'image/gif'
 * };
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @requires {@link RecordRTC}
 */

function MRecordRTC(mediaStream) {

    /**
     * This method attaches MediaStream object to {@link MRecordRTC}.
     * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.addStream(MediaStream);
     */
    this.addStream = function(_mediaStream) {
        if (_mediaStream) {
            mediaStream = _mediaStream;
        }
    };

    /**
     * This property can be used to set the recording type e.g. audio, or video, or gif, or canvas.
     * @property {object} mediaType - {audio: true, video: true, gif: true}
     * @memberof MRecordRTC
     * @example
     * var recorder = new MRecordRTC();
     * recorder.mediaType = {
     *     audio: true, // TRUE or StereoAudioRecorder or MediaStreamRecorder
     *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
     *     gif  : true  // TRUE or GifRecorder
     * };
     */
    this.mediaType = {
        audio: true,
        video: true
    };

    /**
     * This method starts recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.startRecording();
     */
    this.startRecording = function() {
        var mediaType = this.mediaType;
        var recorderType;
        var mimeType = this.mimeType || {
            audio: null,
            video: null,
            gif: null
        };

        if (typeof mediaType.audio !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'audio').length) {
            mediaType.audio = false;
        }

        if (typeof mediaType.video !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
            mediaType.video = false;
        }

        if (typeof mediaType.gif !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
            mediaType.gif = false;
        }

        if (!mediaType.audio && !mediaType.video && !mediaType.gif) {
            throw 'MediaStream must have either audio or video tracks.';
        }

        if (!!mediaType.audio) {
            recorderType = null;
            if (typeof mediaType.audio === 'function') {
                recorderType = mediaType.audio;
            }

            this.audioRecorder = new RecordRTC(mediaStream, {
                type: 'audio',
                bufferSize: this.bufferSize,
                sampleRate: this.sampleRate,
                numberOfAudioChannels: this.numberOfAudioChannels || 2,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.audio,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp
            });

            if (!mediaType.video) {
                this.audioRecorder.startRecording();
            }
        }

        if (!!mediaType.video) {
            recorderType = null;
            if (typeof mediaType.video === 'function') {
                recorderType = mediaType.video;
            }

            var newStream = mediaStream;

            if (isMediaRecorderCompatible() && !!mediaType.audio && typeof mediaType.audio === 'function') {
                var videoTrack = getTracks(mediaStream, 'video')[0];

                if (isFirefox) {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);

                    if (recorderType && recorderType === WhammyRecorder) {
                        // Firefox does NOT supports webp-encoding yet
                        // But Firefox do supports WebAssemblyRecorder
                        recorderType = MediaStreamRecorder;
                    }
                } else {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);
                }
            }

            this.videoRecorder = new RecordRTC(newStream, {
                type: 'video',
                video: this.video,
                canvas: this.canvas,
                frameInterval: this.frameInterval || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.video,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp,
                workerPath: this.workerPath,
                webAssemblyPath: this.webAssemblyPath,
                frameRate: this.frameRate, // used by WebAssemblyRecorder; values: usually 30; accepts any.
                bitrate: this.bitrate // used by WebAssemblyRecorder; values: 0 to 1000+
            });

            if (!mediaType.audio) {
                this.videoRecorder.startRecording();
            }
        }

        if (!!mediaType.audio && !!mediaType.video) {
            var self = this;

            var isSingleRecorder = isMediaRecorderCompatible() === true;

            if (mediaType.audio instanceof StereoAudioRecorder && !!mediaType.video) {
                isSingleRecorder = false;
            } else if (mediaType.audio !== true && mediaType.video !== true && mediaType.audio !== mediaType.video) {
                isSingleRecorder = false;
            }

            if (isSingleRecorder === true) {
                self.audioRecorder = null;
                self.videoRecorder.startRecording();
            } else {
                self.videoRecorder.initRecorder(function() {
                    self.audioRecorder.initRecorder(function() {
                        // Both recorders are ready to record things accurately
                        self.videoRecorder.startRecording();
                        self.audioRecorder.startRecording();
                    });
                });
            }
        }

        if (!!mediaType.gif) {
            recorderType = null;
            if (typeof mediaType.gif === 'function') {
                recorderType = mediaType.gif;
            }
            this.gifRecorder = new RecordRTC(mediaStream, {
                type: 'gif',
                frameRate: this.frameRate || 200,
                quality: this.quality || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.gif
            });
            this.gifRecorder.startRecording();
        }
    };

    /**
     * This method stops recording.
     * @param {function} callback - Callback function is invoked when all encoders finished their jobs.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.stopRecording(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     */
    this.stopRecording = function(callback) {
        callback = callback || function() {};

        if (this.audioRecorder) {
            this.audioRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'audio');
            });
        }

        if (this.videoRecorder) {
            this.videoRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'video');
            });
        }

        if (this.gifRecorder) {
            this.gifRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'gif');
            });
        }
    };

    /**
     * This method pauses recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.pauseRecording();
     */
    this.pauseRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.pauseRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.pauseRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.pauseRecording();
        }
    };

    /**
     * This method resumes recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.resumeRecording();
     */
    this.resumeRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.resumeRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.resumeRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.resumeRecording();
        }
    };

    /**
     * This method can be used to manually get all recorded blobs.
     * @param {function} callback - All recorded blobs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getBlob(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     * // or
     * var audioBlob = recorder.getBlob().audio;
     * var videoBlob = recorder.getBlob().video;
     */
    this.getBlob = function(callback) {
        var output = {};

        if (this.audioRecorder) {
            output.audio = this.audioRecorder.getBlob();
        }

        if (this.videoRecorder) {
            output.video = this.videoRecorder.getBlob();
        }

        if (this.gifRecorder) {
            output.gif = this.gifRecorder.getBlob();
        }

        if (callback) {
            callback(output);
        }

        return output;
    };

    /**
     * Destroy all recorder instances.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.destroy();
     */
    this.destroy = function() {
        if (this.audioRecorder) {
            this.audioRecorder.destroy();
            this.audioRecorder = null;
        }

        if (this.videoRecorder) {
            this.videoRecorder.destroy();
            this.videoRecorder = null;
        }

        if (this.gifRecorder) {
            this.gifRecorder.destroy();
            this.gifRecorder = null;
        }
    };

    /**
     * This method can be used to manually get all recorded blobs' DataURLs.
     * @param {function} callback - All recorded blobs' DataURLs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getDataURL(function(recording){
     *     var audioDataURL = recording.audio;
     *     var videoDataURL = recording.video;
     *     var gifDataURL   = recording.gif;
     * });
     */
    this.getDataURL = function(callback) {
        this.getBlob(function(blob) {
            if (blob.audio && blob.video) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    getDataURL(blob.video, function(_videoDataURL) {
                        callback({
                            audio: _audioDataURL,
                            video: _videoDataURL
                        });
                    });
                });
            } else if (blob.audio) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    callback({
                        audio: _audioDataURL
                    });
                });
            } else if (blob.video) {
                getDataURL(blob.video, function(_videoDataURL) {
                    callback({
                        video: _videoDataURL
                    });
                });
            }
        });

        function getDataURL(blob, callback00) {
            if (typeof Worker !== 'undefined') {
                var webWorker = processInWebWorker(function readFile(_blob) {
                    postMessage(new FileReaderSync().readAsDataURL(_blob));
                });

                webWorker.onmessage = function(event) {
                    callback00(event.data);
                };

                webWorker.postMessage(blob);
            } else {
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function(event) {
                    callback00(event.target.result);
                };
            }
        }

        function processInWebWorker(_function) {
            var blob = URL.createObjectURL(new Blob([_function.toString(),
                'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
            ], {
                type: 'application/javascript'
            }));

            var worker = new Worker(blob);
            var url;
            if (typeof URL !== 'undefined') {
                url = URL;
            } else if (typeof webkitURL !== 'undefined') {
                url = webkitURL;
            } else {
                throw 'Neither URL nor webkitURL detected.';
            }
            url.revokeObjectURL(blob);
            return worker;
        }
    };

    /**
     * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.writeToDisk();
     */
    this.writeToDisk = function() {
        RecordRTC.writeToDisk({
            audio: this.audioRecorder,
            video: this.videoRecorder,
            gif: this.gifRecorder
        });
    };

    /**
     * This method can be used to invoke a save-as dialog for all recorded blobs.
     * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.save({
     *     audio: 'audio-file-name',
     *     video: 'video-file-name',
     *     gif  : 'gif-file-name'
     * });
     */
    this.save = function(args) {
        args = args || {
            audio: true,
            video: true,
            gif: true
        };

        if (!!args.audio && this.audioRecorder) {
            this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
        }

        if (!!args.video && this.videoRecorder) {
            this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
        }
        if (!!args.gif && this.gifRecorder) {
            this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
        }
    };
}

/**
 * This method can be used to get all recorded blobs from IndexedDB storage.
 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
 * @param {function} callback - Callback function to get all stored blobs.
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.getFromDisk('all', function(dataURL, type){
 *     if(type === 'audio') { }
 *     if(type === 'video') { }
 *     if(type === 'gif')   { }
 * });
 */
MRecordRTC.getFromDisk = RecordRTC.getFromDisk;

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
MRecordRTC.writeToDisk = RecordRTC.writeToDisk;

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MRecordRTC = MRecordRTC;
}

var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

(function(that) {
    if (!that) {
        return;
    }

    if (typeof window !== 'undefined') {
        return;
    }

    if (typeof global === 'undefined') {
        return;
    }

    global.navigator = {
        userAgent: browserFakeUserAgent,
        getUserMedia: function() {}
    };

    if (!global.console) {
        global.console = {};
    }

    if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
        global.console.error = global.console.log = global.console.log || function() {
            console.log(arguments);
        };
    }

    if (typeof document === 'undefined') {
        /*global document:true */
        that.document = {
            documentElement: {
                appendChild: function() {
                    return '';
                }
            }
        };

        document.createElement = document.captureStream = document.mozCaptureStream = function() {
            var obj = {
                getContext: function() {
                    return obj;
                },
                play: function() {},
                pause: function() {},
                drawImage: function() {},
                toDataURL: function() {
                    return '';
                },
                style: {}
            };
            return obj;
        };

        that.HTMLVideoElement = function() {};
    }

    if (typeof location === 'undefined') {
        /*global location:true */
        that.location = {
            protocol: 'file:',
            href: '',
            hash: ''
        };
    }

    if (typeof screen === 'undefined') {
        /*global screen:true */
        that.screen = {
            width: 0,
            height: 0
        };
    }

    if (typeof URL === 'undefined') {
        /*global screen:true */
        that.URL = {
            createObjectURL: function() {
                return '';
            },
            revokeObjectURL: function() {
                return '';
            }
        };
    }

    /*global window:true */
    that.window = global;
})(typeof global !== 'undefined' ? global : null);

// _____________________________
// Cross-Browser-Declarations.js

// animation-frame used in WebM recording

/*jshint -W079 */
var requestAnimationFrame = window.requestAnimationFrame;
if (typeof requestAnimationFrame === 'undefined') {
    if (typeof webkitRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = webkitRequestAnimationFrame;
    } else if (typeof mozRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = mozRequestAnimationFrame;
    } else if (typeof msRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = msRequestAnimationFrame;
    } else if (typeof requestAnimationFrame === 'undefined') {
        // via: https://gist.github.com/paulirish/1579671
        var lastTime = 0;

        /*global requestAnimationFrame:true */
        requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
}

/*jshint -W079 */
var cancelAnimationFrame = window.cancelAnimationFrame;
if (typeof cancelAnimationFrame === 'undefined') {
    if (typeof webkitCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = webkitCancelAnimationFrame;
    } else if (typeof mozCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = mozCancelAnimationFrame;
    } else if (typeof msCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = msCancelAnimationFrame;
    } else if (typeof cancelAnimationFrame === 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}

// WebAudio API representer
var AudioContext = window.AudioContext;

if (typeof AudioContext === 'undefined') {
    if (typeof webkitAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = webkitAudioContext;
    }

    if (typeof mozAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = mozAudioContext;
    }
}

/*jshint -W079 */
var URL = window.URL;

if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
    /*global URL:true */
    URL = webkitURL;
}

if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
    if (typeof navigator.webkitGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.webkitGetUserMedia;
    }

    if (typeof navigator.mozGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.mozGetUserMedia;
    }
}

var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') !== -1;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && ('netscape' in window) && / rv:/.test(navigator.userAgent);
var isChrome = (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) || isElectron() || navigator.userAgent.toLowerCase().indexOf('chrome/') !== -1;

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari && !isChrome && navigator.userAgent.indexOf('CriOS') !== -1) {
    isSafari = false;
    isChrome = true;
}

var MediaStream = window.MediaStream;

if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
    MediaStream = webkitMediaStream;
}

/*global MediaStream:true */
if (typeof MediaStream !== 'undefined') {
    // override "stop" method for all browsers
    if (typeof MediaStream.prototype.stop === 'undefined') {
        MediaStream.prototype.stop = function() {
            this.getTracks().forEach(function(track) {
                track.stop();
            });
        };
    }
}

// below function via: http://goo.gl/B3ae8c
/**
 * Return human-readable file size.
 * @param {number} bytes - Pass bytes and get formatted string.
 * @returns {string} - formatted string
 * @example
 * bytesToSize(1024*1024*5) === '5 GB'
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return '0 Bytes';
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

/**
 * @param {Blob} file - File or Blob object. This parameter is required.
 * @param {string} fileName - Optional file name e.g. "Recorded-Video.webm"
 * @example
 * invokeSaveAsDialog(blob or file, [optional] fileName);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function invokeSaveAsDialog(file, fileName) {
    if (!file) {
        throw 'Blob object is required.';
    }

    if (!file.type) {
        try {
            file.type = 'video/webm';
        } catch (e) {}
    }

    var fileExtension = (file.type || 'video/webm').split('/')[1];

    if (fileName && fileName.indexOf('.') !== -1) {
        var splitted = fileName.split('.');
        fileName = splitted[0];
        fileExtension = splitted[1];
    }

    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
    } else if (typeof navigator.msSaveBlob !== 'undefined') {
        return navigator.msSaveBlob(file, fileFullName);
    }

    var hyperlink = document.createElement('a');
    hyperlink.href = URL.createObjectURL(file);
    hyperlink.download = fileFullName;

    hyperlink.style = 'display:none;opacity:0;color:transparent;';
    (document.body || document.documentElement).appendChild(hyperlink);

    if (typeof hyperlink.click === 'function') {
        hyperlink.click();
    } else {
        hyperlink.target = '_blank';
        hyperlink.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }

    URL.revokeObjectURL(hyperlink.href);
}

/**
 * from: https://github.com/cheton/is-electron/blob/master/index.js
 **/
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

function getTracks(stream, kind) {
    if (!stream || !stream.getTracks) {
        return [];
    }

    return stream.getTracks().filter(function(t) {
        return t.kind === (kind || 'audio');
    });
}

function setSrcObject(stream, element) {
    if ('srcObject' in element) {
        element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
        element.mozSrcObject = stream;
    } else {
        element.srcObject = stream;
    }
}

/**
 * @param {Blob} file - File or Blob object.
 * @param {function} callback - Callback function.
 * @example
 * getSeekableBlob(blob or file, callback);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function getSeekableBlob(inputBlob, callback) {
    // EBML.js copyrights goes to: https://github.com/legokichi/ts-ebml
    if (typeof EBML === 'undefined') {
        throw new Error('Please link: https://www.webrtc-experiment.com/EBML.js');
    }

    var reader = new EBML.Reader();
    var decoder = new EBML.Decoder();
    var tools = EBML.tools;

    var fileReader = new FileReader();
    fileReader.onload = function(e) {
        var ebmlElms = decoder.decode(this.result);
        ebmlElms.forEach(function(element) {
            reader.read(element);
        });
        reader.stop();
        var refinedMetadataBuf = tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
        var body = this.result.slice(reader.metadataSize);
        var newBlob = new Blob([refinedMetadataBuf, body], {
            type: 'video/webm'
        });

        callback(newBlob);
    };
    fileReader.readAsArrayBuffer(inputBlob);
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.invokeSaveAsDialog = invokeSaveAsDialog;
    RecordRTC.getTracks = getTracks;
    RecordRTC.getSeekableBlob = getSeekableBlob;
    RecordRTC.bytesToSize = bytesToSize;
    RecordRTC.isElectron = isElectron;
}

// __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
// Storage.js

/**
 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @example
 * Storage.AudioContext === webkitAudioContext
 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Storage = {};

if (typeof AudioContext !== 'undefined') {
    Storage.AudioContext = AudioContext;
} else if (typeof webkitAudioContext !== 'undefined') {
    Storage.AudioContext = webkitAudioContext;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Storage = Storage;
}

function isMediaRecorderCompatible() {
    if (isFirefox || isSafari || isEdge) {
        return true;
    }

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    if (isChrome || isOpera) {
        verOffset = nAgt.indexOf('Chrome');
        fullVersion = nAgt.substring(verOffset + 7);
    }

    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(';')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    if ((ix = fullVersion.indexOf(' ')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    majorVersion = parseInt('' + fullVersion, 10);

    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    return majorVersion >= 49;
}

// ______________________
// MediaStreamRecorder.js

/**
 * MediaStreamRecorder is an abstraction layer for {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}. It is used by {@link RecordRTC} to record MediaStream(s) in both Chrome and Firefox.
 * @summary Runs top over {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://github.com/muaz-khan|Muaz Khan}
 * @typedef MediaStreamRecorder
 * @class
 * @example
 * var config = {
 *     mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
 *     audioBitsPerSecond : 256 * 8 * 1024,
 *     videoBitsPerSecond : 256 * 8 * 1024,
 *     bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
 *     checkForInactiveTracks: true,
 *     timeSlice: 1000, // concatenate intervals based blobs
 *     ondataavailable: function() {} // get intervals based blobs
 * }
 * var recorder = new MediaStreamRecorder(mediaStream, config);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", timeSlice: 1000}
 * @throws Will throw an error if first argument "MediaStream" is missing. Also throws error if "MediaRecorder API" are not supported by the browser.
 */

function MediaStreamRecorder(mediaStream, config) {
    var self = this;

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    if (typeof MediaRecorder === 'undefined') {
        throw 'Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.';
    }

    config = config || {
        // bitsPerSecond: 256 * 8 * 1024,
        mimeType: 'video/webm'
    };

    if (config.type === 'audio') {
        if (getTracks(mediaStream, 'video').length && getTracks(mediaStream, 'audio').length) {
            var stream;
            if (!!navigator.mozGetUserMedia) {
                stream = new MediaStream();
                stream.addTrack(getTracks(mediaStream, 'audio')[0]);
            } else {
                // webkitMediaStream
                stream = new MediaStream(getTracks(mediaStream, 'audio'));
            }
            mediaStream = stream;
        }

        if (!config.mimeType || config.mimeType.toString().toLowerCase().indexOf('audio') === -1) {
            config.mimeType = isChrome ? 'audio/webm' : 'audio/ogg';
        }

        if (config.mimeType && config.mimeType.toString().toLowerCase() !== 'audio/ogg' && !!navigator.mozGetUserMedia) {
            // forcing better codecs on Firefox (via #166)
            config.mimeType = 'audio/ogg';
        }
    }

    var arrayOfBlobs = [];

    /**
     * This method returns array of blobs. Use only with "timeSlice". Its useful to preview recording anytime, without using the "stop" method.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var arrayOfBlobs = recorder.getArrayOfBlobs();
     * @returns {Array} Returns array of recorded blobs.
     */
    this.getArrayOfBlobs = function() {
        return arrayOfBlobs;
    };

    /**
     * This method records MediaStream.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // set defaults
        self.blob = null;
        self.clearRecordedData();
        self.timestamps = [];
        allStates = [];
        arrayOfBlobs = [];

        var recorderHints = config;

        if (!config.disableLogs) {
            console.log('Passing following config over MediaRecorder API.', recorderHints);
        }

        if (mediaRecorder) {
            // mandatory to make sure Firefox doesn't fails to record streams 3-4 times without reloading the page.
            mediaRecorder = null;
        }

        if (isChrome && !isMediaRecorderCompatible()) {
            // to support video-only recording on stable
            recorderHints = 'video/vp8';
        }

        if (typeof MediaRecorder.isTypeSupported === 'function' && recorderHints.mimeType) {
            if (!MediaRecorder.isTypeSupported(recorderHints.mimeType)) {
                if (!config.disableLogs) {
                    console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
                }

                recorderHints.mimeType = config.type === 'audio' ? 'audio/webm' : 'video/webm';
            }
        }

        // using MediaRecorder API here
        try {
            mediaRecorder = new MediaRecorder(mediaStream, recorderHints);

            // reset
            config.mimeType = recorderHints.mimeType;
        } catch (e) {
            // chrome-based fallback
            mediaRecorder = new MediaRecorder(mediaStream);
        }

        // old hack?
        if (recorderHints.mimeType && !MediaRecorder.isTypeSupported && 'canRecordMimeType' in mediaRecorder && mediaRecorder.canRecordMimeType(recorderHints.mimeType) === false) {
            if (!config.disableLogs) {
                console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
            }
        }

        // Dispatching OnDataAvailable Handler
        mediaRecorder.ondataavailable = function(e) {
            if (e.data) {
                allStates.push('ondataavailable: ' + bytesToSize(e.data.size));
            }

            if (typeof config.timeSlice === 'number') {
                if (e.data && e.data.size && e.data.size > 100) {
                    arrayOfBlobs.push(e.data);
                    updateTimeStamp();

                    if (typeof config.ondataavailable === 'function') {
                        // intervals based blobs
                        var blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                            type: getMimeType(recorderHints)
                        });
                        config.ondataavailable(blob);
                    }
                }
                return;
            }

            if (!e.data || !e.data.size || e.data.size < 100 || self.blob) {
                // make sure that stopRecording always getting fired
                // even if there is invalid data
                if (self.recordingCallback) {
                    self.recordingCallback(new Blob([], {
                        type: getMimeType(recorderHints)
                    }));
                    self.recordingCallback = null;
                }
                return;
            }

            self.blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                type: getMimeType(recorderHints)
            });

            if (self.recordingCallback) {
                self.recordingCallback(self.blob);
                self.recordingCallback = null;
            }
        };

        mediaRecorder.onstart = function() {
            allStates.push('started');
        };

        mediaRecorder.onpause = function() {
            allStates.push('paused');
        };

        mediaRecorder.onresume = function() {
            allStates.push('resumed');
        };

        mediaRecorder.onstop = function() {
            allStates.push('stopped');
        };

        mediaRecorder.onerror = function(error) {
            if (!error) {
                return;
            }

            if (!error.name) {
                error.name = 'UnknownError';
            }

            allStates.push('error: ' + error);

            if (!config.disableLogs) {
                // via: https://w3c.github.io/mediacapture-record/MediaRecorder.html#exception-summary
                if (error.name.toString().toLowerCase().indexOf('invalidstate') !== -1) {
                    console.error('The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.', error);
                } else if (error.name.toString().toLowerCase().indexOf('notsupported') !== -1) {
                    console.error('MIME type (', recorderHints.mimeType, ') is not supported.', error);
                } else if (error.name.toString().toLowerCase().indexOf('security') !== -1) {
                    console.error('MediaRecorder security error', error);
                }

                // older code below
                else if (error.name === 'OutOfMemory') {
                    console.error('The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'IllegalStreamModification') {
                    console.error('A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'OtherRecordingError') {
                    console.error('Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'GenericError') {
                    console.error('The UA cannot provide the codec or recording option that has been requested.', error);
                } else {
                    console.error('MediaRecorder Error', error);
                }
            }

            (function(looper) {
                if (!self.manuallyStopped && mediaRecorder && mediaRecorder.state === 'inactive') {
                    delete config.timeslice;

                    // 10 minutes, enough?
                    mediaRecorder.start(10 * 60 * 1000);
                    return;
                }

                setTimeout(looper, 1000);
            })();

            if (mediaRecorder.state !== 'inactive' && mediaRecorder.state !== 'stopped') {
                mediaRecorder.stop();
            }
        };

        if (typeof config.timeSlice === 'number') {
            updateTimeStamp();
            mediaRecorder.start(config.timeSlice);
        } else {
            // default is 60 minutes; enough?
            // use config => {timeSlice: 1000} otherwise

            mediaRecorder.start(3.6e+6);
        }

        if (config.initCallback) {
            config.initCallback(); // old code
        }
    };

    /**
     * @property {Array} timestamps - Array of time stamps
     * @memberof MediaStreamRecorder
     * @example
     * console.log(recorder.timestamps);
     */
    this.timestamps = [];

    function updateTimeStamp() {
        self.timestamps.push(new Date().getTime());

        if (typeof config.onTimeStamp === 'function') {
            config.onTimeStamp(self.timestamps[self.timestamps.length - 1], self.timestamps);
        }
    }

    function getMimeType(secondObject) {
        if (mediaRecorder && mediaRecorder.mimeType) {
            return mediaRecorder.mimeType;
        }

        return secondObject.mimeType || 'video/webm';
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        self.manuallyStopped = true; // used inside the mediaRecorder.onerror

        if (!mediaRecorder) {
            return;
        }

        this.recordingCallback = callback;

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }

        if (typeof config.timeSlice === 'number') {
            setTimeout(function() {
                self.blob = new Blob(arrayOfBlobs, {
                    type: getMimeType(config)
                });

                self.recordingCallback(self.blob);
            }, 100);
        }
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'paused') {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            self.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        arrayOfBlobs = [];
        mediaRecorder = null;
        self.timestamps = [];
    }

    // Reference to "MediaRecorder" object
    var mediaRecorder;

    /**
     * Access to native MediaRecorder API
     * @method
     * @memberof MediaStreamRecorder
     * @instance
     * @example
     * var internal = recorder.getInternalRecorder();
     * internal.ondataavailable = function() {}; // override
     * internal.stream, internal.onpause, internal.onstop, etc.
     * @returns {Object} Returns internal recording object.
     */
    this.getInternalRecorder = function() {
        return mediaRecorder;
    };

    function isMediaStreamActive() {
        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function() {
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;


    /**
     * Get MediaRecorder readonly state.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getState();
     * @returns {String} Returns recording state.
     */
    this.getState = function() {
        if (!mediaRecorder) {
            return 'inactive';
        }

        return mediaRecorder.state || 'inactive';
    };

    // list of all recording states
    var allStates = [];

    /**
     * Get MediaRecorder all recording states.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getAllStates();
     * @returns {Array} Returns all recording states
     */
    this.getAllStates = function() {
        return allStates;
    };

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = false; // disable to minimize CPU usage
    }

    var self = this;

    // this method checks if media stream is stopped
    // or if any track is ended.
    (function looper() {
        if (!mediaRecorder || config.checkForInactiveTracks === false) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            self.stop();
            return;
        }

        setTimeout(looper, 1000); // check every second
    })();

    // for debugging
    this.name = 'MediaStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MediaStreamRecorder = MediaStreamRecorder;
}

// source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
// https://github.com/mattdiamond/Recorderjs#license-mit
// ______________________
// StereoAudioRecorder.js

/**
 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
 * @summary JavaScript standalone object for stereo audio recording.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef StereoAudioRecorder
 * @class
 * @example
 * var recorder = new StereoAudioRecorder(MediaStream, {
 *     sampleRate: 44100,
 *     bufferSize: 4096
 * });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
 */

function StereoAudioRecorder(mediaStream, config) {
    if (!getTracks(mediaStream, 'audio').length) {
        throw 'Your stream has no audio tracks.';
    }

    config = config || {};

    var self = this;

    // variables
    var leftchannel = [];
    var rightchannel = [];
    var recording = false;
    var recordingLength = 0;
    var jsAudioNode;

    var numberOfAudioChannels = 2;

    /**
     * Set sample rates such as 8K or 16K. Reference: http://stackoverflow.com/a/28977136/552182
     * @property {number} desiredSampRate - Desired Bits per sample * 1000
     * @memberof StereoAudioRecorder
     * @instance
     * @example
     * var recorder = StereoAudioRecorder(mediaStream, {
     *   desiredSampRate: 16 * 1000 // bits-per-sample * 1000
     * });
     */
    var desiredSampRate = config.desiredSampRate;

    // backward compatibility
    if (config.leftChannel === true) {
        numberOfAudioChannels = 1;
    }

    if (config.numberOfAudioChannels === 1) {
        numberOfAudioChannels = 1;
    }

    if (!numberOfAudioChannels || numberOfAudioChannels < 1) {
        numberOfAudioChannels = 2;
    }

    if (!config.disableLogs) {
        console.log('StereoAudioRecorder is set to record number of channels: ' + numberOfAudioChannels);
    }

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = true;
    }

    function isMediaStreamActive() {
        if (config.checkForInactiveTracks === false) {
            // always return "true"
            return true;
        }

        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * This method records MediaStream.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        resetVariables();

        isAudioProcessStarted = isPaused = false;
        recording = true;

        if (typeof config.timeSlice !== 'undefined') {
            looper();
        }
    };

    function mergeLeftRightBuffers(config, callback) {
        function mergeAudioBuffers(config, cb) {
            var numberOfAudioChannels = config.numberOfAudioChannels;

            // todo: "slice(0)" --- is it causes loop? Should be removed?
            var leftBuffers = config.leftBuffers.slice(0);
            var rightBuffers = config.rightBuffers.slice(0);
            var sampleRate = config.sampleRate;
            var internalInterleavedLength = config.internalInterleavedLength;
            var desiredSampRate = config.desiredSampRate;

            if (numberOfAudioChannels === 2) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
                rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                    rightBuffers = interpolateArray(rightBuffers, desiredSampRate, sampleRate);
                }
            }

            if (numberOfAudioChannels === 1) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                }
            }

            // set sample rate as desired sample rate
            if (desiredSampRate) {
                sampleRate = desiredSampRate;
            }

            // for changing the sampling rate, reference:
            // http://stackoverflow.com/a/28977136/552182
            function interpolateArray(data, newSampleRate, oldSampleRate) {
                var fitCount = Math.round(data.length * (newSampleRate / oldSampleRate));
                var newData = [];
                var springFactor = Number((data.length - 1) / (fitCount - 1));
                newData[0] = data[0];
                for (var i = 1; i < fitCount - 1; i++) {
                    var tmp = i * springFactor;
                    var before = Number(Math.floor(tmp)).toFixed();
                    var after = Number(Math.ceil(tmp)).toFixed();
                    var atPoint = tmp - before;
                    newData[i] = linearInterpolate(data[before], data[after], atPoint);
                }
                newData[fitCount - 1] = data[data.length - 1];
                return newData;
            }

            function linearInterpolate(before, after, atPoint) {
                return before + (after - before) * atPoint;
            }

            function mergeBuffers(channelBuffer, rLength) {
                var result = new Float64Array(rLength);
                var offset = 0;
                var lng = channelBuffer.length;

                for (var i = 0; i < lng; i++) {
                    var buffer = channelBuffer[i];
                    result.set(buffer, offset);
                    offset += buffer.length;
                }

                return result;
            }

            function interleave(leftChannel, rightChannel) {
                var length = leftChannel.length + rightChannel.length;

                var result = new Float64Array(length);

                var inputIndex = 0;

                for (var index = 0; index < length;) {
                    result[index++] = leftChannel[inputIndex];
                    result[index++] = rightChannel[inputIndex];
                    inputIndex++;
                }
                return result;
            }

            function writeUTFBytes(view, offset, string) {
                var lng = string.length;
                for (var i = 0; i < lng; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }

            // interleave both channels together
            var interleaved;

            if (numberOfAudioChannels === 2) {
                interleaved = interleave(leftBuffers, rightBuffers);
            }

            if (numberOfAudioChannels === 1) {
                interleaved = leftBuffers;
            }

            var interleavedLength = interleaved.length;

            // create wav file
            var resultingBufferLength = 44 + interleavedLength * 2;

            var buffer = new ArrayBuffer(resultingBufferLength);

            var view = new DataView(buffer);

            // RIFF chunk descriptor/identifier 
            writeUTFBytes(view, 0, 'RIFF');

            // RIFF chunk length
            // changed "44" to "36" via #401
            view.setUint32(4, 36 + interleavedLength * 2, true);

            // RIFF type 
            writeUTFBytes(view, 8, 'WAVE');

            // format chunk identifier 
            // FMT sub-chunk
            writeUTFBytes(view, 12, 'fmt ');

            // format chunk length 
            view.setUint32(16, 16, true);

            // sample format (raw)
            view.setUint16(20, 1, true);

            // stereo (2 channels)
            view.setUint16(22, numberOfAudioChannels, true);

            // sample rate 
            view.setUint32(24, sampleRate, true);

            // byte rate (sample rate * block align)
            view.setUint32(28, sampleRate * 2, true);

            // block align (channel count * bytes per sample) 
            view.setUint16(32, numberOfAudioChannels * 2, true);

            // bits per sample 
            view.setUint16(34, 16, true);

            // data sub-chunk
            // data chunk identifier 
            writeUTFBytes(view, 36, 'data');

            // data chunk length 
            view.setUint32(40, interleavedLength * 2, true);

            // write the PCM samples
            var lng = interleavedLength;
            var index = 44;
            var volume = 1;
            for (var i = 0; i < lng; i++) {
                view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
                index += 2;
            }

            if (cb) {
                return cb({
                    buffer: buffer,
                    view: view
                });
            }

            postMessage({
                buffer: buffer,
                view: view
            });
        }

        if (config.noWorker) {
            mergeAudioBuffers(config, function(data) {
                callback(data.buffer, data.view);
            });
            return;
        }


        var webWorker = processInWebWorker(mergeAudioBuffers);

        webWorker.onmessage = function(event) {
            callback(event.data.buffer, event.data.view);

            // release memory
            URL.revokeObjectURL(webWorker.workerURL);

            // kill webworker (or Chrome will kill your page after ~25 calls)
            webWorker.terminate();
        };

        webWorker.postMessage(config);
    }

    function processInWebWorker(_function) {
        var workerURL = URL.createObjectURL(new Blob([_function.toString(),
            ';this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(workerURL);
        worker.workerURL = workerURL;
        return worker;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        // stop recording
        recording = false;

        mergeLeftRightBuffers({
            desiredSampRate: desiredSampRate,
            sampleRate: sampleRate,
            numberOfAudioChannels: numberOfAudioChannels,
            internalInterleavedLength: recordingLength,
            leftBuffers: leftchannel,
            rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel,
            noWorker: config.noWorker
        }, function(buffer, view) {
            /**
             * @property {Blob} blob - The recorded blob object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var blob = recorder.blob;
             * });
             */
            self.blob = new Blob([view], {
                type: 'audio/wav'
            });

            /**
             * @property {ArrayBuffer} buffer - The recorded buffer object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var buffer = recorder.buffer;
             * });
             */
            self.buffer = new ArrayBuffer(view.buffer.byteLength);

            /**
             * @property {DataView} view - The recorded data-view object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var view = recorder.view;
             * });
             */
            self.view = view;

            self.sampleRate = desiredSampRate || sampleRate;
            self.bufferSize = bufferSize;

            // recorded audio length
            self.length = recordingLength;

            isAudioProcessStarted = false;

            if (callback) {
                callback(self.blob);
            }
        });
    };

    if (typeof RecordRTC.Storage === 'undefined') {
        RecordRTC.Storage = {
            AudioContextConstructor: null,
            AudioContext: window.AudioContext || window.webkitAudioContext
        };
    }

    if (!RecordRTC.Storage.AudioContextConstructor || RecordRTC.Storage.AudioContextConstructor.state === 'closed') {
        RecordRTC.Storage.AudioContextConstructor = new RecordRTC.Storage.AudioContext();
    }

    var context = RecordRTC.Storage.AudioContextConstructor;

    // creates an audio node from the microphone incoming stream
    var audioInput = context.createMediaStreamSource(mediaStream);

    var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];

    /**
     * From the spec: This value controls how frequently the audioprocess event is
     * dispatched and how many sample-frames need to be processed each call.
     * Lower values for buffer size will result in a lower (better) latency.
     * Higher values will be necessary to avoid audio breakup and glitches
     * The size of the buffer (in sample-frames) which needs to
     * be processed each time onprocessaudio is called.
     * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
     * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     bufferSize: 4096
     * });
     */

    // "0" means, let chrome decide the most accurate buffer-size for current platform.
    var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;

    if (legalBufferValues.indexOf(bufferSize) === -1) {
        if (!config.disableLogs) {
            console.log('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
        }
    }

    if (context.createJavaScriptNode) {
        jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else if (context.createScriptProcessor) {
        jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else {
        throw 'WebAudio API has no support on this browser.';
    }

    // connect the stream to the script processor
    audioInput.connect(jsAudioNode);

    if (!config.bufferSize) {
        bufferSize = jsAudioNode.bufferSize; // device buffer-size
    }

    /**
     * The sample rate (in sample-frames per second) at which the
     * AudioContext handles audio. It is assumed that all AudioNodes
     * in the context run at this rate. In making this assumption,
     * sample-rate converters or "varispeed" processors are not supported
     * in real-time processing.
     * The sampleRate parameter describes the sample-rate of the
     * linear PCM audio data in the buffer in sample-frames per second.
     * An implementation must support sample-rates in at least
     * the range 22050 to 96000.
     * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     sampleRate: 44100
     * });
     */
    var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;

    if (sampleRate < 22050 || sampleRate > 96000) {
        // Ref: http://stackoverflow.com/a/26303918/552182
        if (!config.disableLogs) {
            console.log('sample-rate must be under range 22050 and 96000.');
        }
    }

    if (!config.disableLogs) {
        if (config.desiredSampRate) {
            console.log('Desired sample-rate: ' + config.desiredSampRate);
        }
    }

    var isPaused = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        if (!recording) {
            if (!config.disableLogs) {
                console.log('Seems recording has been restarted.');
            }
            this.record();
            return;
        }

        isPaused = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        config.checkForInactiveTracks = false;

        if (recording) {
            this.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function resetVariables() {
        leftchannel = [];
        rightchannel = [];
        recordingLength = 0;
        isAudioProcessStarted = false;
        recording = false;
        isPaused = false;
        context = null;

        self.leftchannel = leftchannel;
        self.rightchannel = rightchannel;
        self.numberOfAudioChannels = numberOfAudioChannels;
        self.desiredSampRate = desiredSampRate;
        self.sampleRate = sampleRate;
        self.recordingLength = recordingLength;

        intervalsBasedBuffers = {
            left: [],
            right: [],
            recordingLength: 0
        };
    }

    function clearRecordedDataCB() {
        if (jsAudioNode) {
            jsAudioNode.onaudioprocess = null;
            jsAudioNode.disconnect();
            jsAudioNode = null;
        }

        if (audioInput) {
            audioInput.disconnect();
            audioInput = null;
        }

        resetVariables();
    }

    // for debugging
    this.name = 'StereoAudioRecorder';
    this.toString = function() {
        return this.name;
    };

    var isAudioProcessStarted = false;

    function onAudioProcessDataAvailable(e) {
        if (isPaused) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            jsAudioNode.disconnect();
            recording = false;
        }

        if (!recording) {
            if (audioInput) {
                audioInput.disconnect();
                audioInput = null;
            }
            return;
        }

        /**
         * This method is called on "onaudioprocess" event's first invocation.
         * @method {function} onAudioProcessStarted
         * @memberof StereoAudioRecorder
         * @example
         * recorder.onAudioProcessStarted: function() { };
         */
        if (!isAudioProcessStarted) {
            isAudioProcessStarted = true;
            if (config.onAudioProcessStarted) {
                config.onAudioProcessStarted();
            }

            if (config.initCallback) {
                config.initCallback();
            }
        }

        var left = e.inputBuffer.getChannelData(0);

        // we clone the samples
        var chLeft = new Float32Array(left);
        leftchannel.push(chLeft);

        if (numberOfAudioChannels === 2) {
            var right = e.inputBuffer.getChannelData(1);
            var chRight = new Float32Array(right);
            rightchannel.push(chRight);
        }

        recordingLength += bufferSize;

        // export raw PCM
        self.recordingLength = recordingLength;

        if (typeof config.timeSlice !== 'undefined') {
            intervalsBasedBuffers.recordingLength += bufferSize;
            intervalsBasedBuffers.left.push(chLeft);

            if (numberOfAudioChannels === 2) {
                intervalsBasedBuffers.right.push(chRight);
            }
        }
    }

    jsAudioNode.onaudioprocess = onAudioProcessDataAvailable;

    // to prevent self audio to be connected with speakers
    if (context.createMediaStreamDestination) {
        jsAudioNode.connect(context.createMediaStreamDestination());
    } else {
        jsAudioNode.connect(context.destination);
    }

    // export raw PCM
    this.leftchannel = leftchannel;
    this.rightchannel = rightchannel;
    this.numberOfAudioChannels = numberOfAudioChannels;
    this.desiredSampRate = desiredSampRate;
    this.sampleRate = sampleRate;
    self.recordingLength = recordingLength;

    // helper for intervals based blobs
    var intervalsBasedBuffers = {
        left: [],
        right: [],
        recordingLength: 0
    };

    // this looper is used to support intervals based blobs (via timeSlice+ondataavailable)
    function looper() {
        if (!recording || typeof config.ondataavailable !== 'function' || typeof config.timeSlice === 'undefined') {
            return;
        }

        if (intervalsBasedBuffers.left.length) {
            mergeLeftRightBuffers({
                desiredSampRate: desiredSampRate,
                sampleRate: sampleRate,
                numberOfAudioChannels: numberOfAudioChannels,
                internalInterleavedLength: intervalsBasedBuffers.recordingLength,
                leftBuffers: intervalsBasedBuffers.left,
                rightBuffers: numberOfAudioChannels === 1 ? [] : intervalsBasedBuffers.right
            }, function(buffer, view) {
                var blob = new Blob([view], {
                    type: 'audio/wav'
                });
                config.ondataavailable(blob);

                setTimeout(looper, config.timeSlice);
            });

            intervalsBasedBuffers = {
                left: [],
                right: [],
                recordingLength: 0
            };
        } else {
            setTimeout(looper, config.timeSlice);
        }
    }
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.StereoAudioRecorder = StereoAudioRecorder;
}

// _________________
// CanvasRecorder.js

/**
 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
 * @summary HTML2Canvas recording into video WebM.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef CanvasRecorder
 * @class
 * @example
 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true, useWhammyRecorder: true });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
 * @param {object} config - {disableLogs:true, initCallback: function}
 */

function CanvasRecorder(htmlElement, config) {
    if (typeof html2canvas === 'undefined') {
        throw 'Please link: https://www.webrtc-experiment.com/screenshot.js';
    }

    config = config || {};
    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    // via DetectRTC.js
    var isCanvasSupportsStreamCapturing = false;
    ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
        if (item in document.createElement('canvas')) {
            isCanvasSupportsStreamCapturing = true;
        }
    });

    var _isChrome = (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome;

    var chromeVersion = 50;
    var matchArray = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (_isChrome && matchArray && matchArray[2]) {
        chromeVersion = parseInt(matchArray[2], 10);
    }

    if (_isChrome && chromeVersion < 52) {
        isCanvasSupportsStreamCapturing = false;
    }

    if (config.useWhammyRecorder) {
        isCanvasSupportsStreamCapturing = false;
    }

    var globalCanvas, mediaStreamRecorder;

    if (isCanvasSupportsStreamCapturing) {
        if (!config.disableLogs) {
            console.log('Your browser supports both MediRecorder API and canvas.captureStream!');
        }

        if (htmlElement instanceof HTMLCanvasElement) {
            globalCanvas = htmlElement;
        } else if (htmlElement instanceof CanvasRenderingContext2D) {
            globalCanvas = htmlElement.canvas;
        } else {
            throw 'Please pass either HTMLCanvasElement or CanvasRenderingContext2D.';
        }
    } else if (!!navigator.mozGetUserMedia) {
        if (!config.disableLogs) {
            console.error('Canvas recording is NOT supported in Firefox.');
        }
    }

    var isRecording;

    /**
     * This method records Canvas.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        isRecording = true;

        if (isCanvasSupportsStreamCapturing && !config.useWhammyRecorder) {
            // CanvasCaptureMediaStream
            var canvasMediaStream;
            if ('captureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.captureStream(25); // 25 FPS
            } else if ('mozCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.mozCaptureStream(25);
            } else if ('webkitCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.webkitCaptureStream(25);
            }

            try {
                var mdStream = new MediaStream();
                mdStream.addTrack(getTracks(canvasMediaStream, 'video')[0]);
                canvasMediaStream = mdStream;
            } catch (e) {}

            if (!canvasMediaStream) {
                throw 'captureStream API are NOT available.';
            }

            // Note: Jan 18, 2016 status is that, 
            // Firefox MediaRecorder API can't record CanvasCaptureMediaStream object.
            mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
                mimeType: config.mimeType || 'video/webm'
            });
            mediaStreamRecorder.record();
        } else {
            whammy.frames = [];
            lastTime = new Date().getTime();
            drawCanvasFrame();
        }

        if (config.initCallback) {
            config.initCallback();
        }
    };

    this.getWebPImages = function(callback) {
        if (htmlElement.nodeName.toLowerCase() !== 'canvas') {
            callback();
            return;
        }

        var framesLength = whammy.frames.length;
        whammy.frames.forEach(function(frame, idx) {
            var framesRemaining = framesLength - idx;
            if (!config.disableLogs) {
                console.log(framesRemaining + '/' + framesLength + ' frames remaining');
            }

            if (config.onEncodingCallback) {
                config.onEncodingCallback(framesRemaining, framesLength);
            }

            var webp = frame.image.toDataURL('image/webp', 1);
            whammy.frames[idx].image = webp;
        });

        if (!config.disableLogs) {
            console.log('Generating WebM');
        }

        callback();
    };

    /**
     * This method stops recording Canvas.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        isRecording = false;

        var that = this;

        if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
            mediaStreamRecorder.stop(callback);
            return;
        }

        this.getWebPImages(function() {
            /**
             * @property {Blob} blob - Recorded frames in video/webm blob.
             * @memberof CanvasRecorder
             * @example
             * recorder.stop(function() {
             *     var blob = recorder.blob;
             * });
             */
            whammy.compile(function(blob) {
                if (!config.disableLogs) {
                    console.log('Recording finished!');
                }

                that.blob = blob;

                if (that.blob.forEach) {
                    that.blob = new Blob([], {
                        type: 'video/webm'
                    });
                }

                if (callback) {
                    callback(that.blob);
                }

                whammy.frames = [];
            });
        });
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.pause();
            return;
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.resume();
            return;
        }

        if (!isRecording) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (isRecording) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isRecording = false;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'CanvasRecorder';
    this.toString = function() {
        return this.name;
    };

    function cloneCanvas() {
        //create a new canvas
        var newCanvas = document.createElement('canvas');
        var context = newCanvas.getContext('2d');

        //set dimensions
        newCanvas.width = htmlElement.width;
        newCanvas.height = htmlElement.height;

        //apply the old canvas to the new one
        context.drawImage(htmlElement, 0, 0);

        //return the new canvas
        return newCanvas;
    }

    function drawCanvasFrame() {
        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawCanvasFrame, 500);
        }

        if (htmlElement.nodeName.toLowerCase() === 'canvas') {
            var duration = new Date().getTime() - lastTime;
            // via #206, by Jack i.e. @Seymourr
            lastTime = new Date().getTime();

            whammy.frames.push({
                image: cloneCanvas(),
                duration: duration
            });

            if (isRecording) {
                setTimeout(drawCanvasFrame, config.frameInterval);
            }
            return;
        }

        html2canvas(htmlElement, {
            grabMouse: typeof config.showMousePointer === 'undefined' || config.showMousePointer,
            onrendered: function(canvas) {
                var duration = new Date().getTime() - lastTime;
                if (!duration) {
                    return setTimeout(drawCanvasFrame, config.frameInterval);
                }

                // via #206, by Jack i.e. @Seymourr
                lastTime = new Date().getTime();

                whammy.frames.push({
                    image: canvas.toDataURL('image/webp', 1),
                    duration: duration
                });

                if (isRecording) {
                    setTimeout(drawCanvasFrame, config.frameInterval);
                }
            }
        });
    }

    var lastTime = new Date().getTime();

    var whammy = new Whammy.Video(100);
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.CanvasRecorder = CanvasRecorder;
}

// _________________
// WhammyRecorder.js

/**
 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
 * @summary Video recording feature in Chrome.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef WhammyRecorder
 * @class
 * @example
 * var recorder = new WhammyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
 */

function WhammyRecorder(mediaStream, config) {

    config = config || {};

    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    if (!config.disableLogs) {
        console.log('Using frames-interval:', config.frameInterval);
    }

    /**
     * This method records video.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (!config.width) {
            config.width = 320;
        }

        if (!config.height) {
            config.height = 240;
        }

        if (!config.video) {
            config.video = {
                width: config.width,
                height: config.height
            };
        }

        if (!config.canvas) {
            config.canvas = {
                width: config.width,
                height: config.height
            };
        }

        canvas.width = config.canvas.width || 320;
        canvas.height = config.canvas.height || 240;

        context = canvas.getContext('2d');

        // setting defaults
        if (config.video && config.video instanceof HTMLVideoElement) {
            video = config.video.cloneNode();

            if (config.initCallback) {
                config.initCallback();
            }
        } else {
            video = document.createElement('video');

            setSrcObject(mediaStream, video);

            video.onloadedmetadata = function() { // "onloadedmetadata" may NOT work in FF?
                if (config.initCallback) {
                    config.initCallback();
                }
            };

            video.width = config.video.width;
            video.height = config.video.height;
        }

        video.muted = true;
        video.play();

        lastTime = new Date().getTime();
        whammy = new Whammy.Video();

        if (!config.disableLogs) {
            console.log('canvas resolutions', canvas.width, '*', canvas.height);
            console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
        }

        drawFrames(config.frameInterval);
    };

    /**
     * Draw and push frames to Whammy
     * @param {integer} frameInterval - set minimum interval (in milliseconds) between each time we push a frame to Whammy
     */
    function drawFrames(frameInterval) {
        frameInterval = typeof frameInterval !== 'undefined' ? frameInterval : 10;

        var duration = new Date().getTime() - lastTime;
        if (!duration) {
            return setTimeout(drawFrames, frameInterval, frameInterval);
        }

        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawFrames, 100);
        }

        // via #206, by Jack i.e. @Seymourr
        lastTime = new Date().getTime();

        if (video.paused) {
            // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
            // Tweak for Android Chrome
            video.play();
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        whammy.frames.push({
            duration: duration,
            image: canvas.toDataURL('image/webp')
        });

        if (!isStopDrawing) {
            setTimeout(drawFrames, frameInterval, frameInterval);
        }
    }

    function asyncLoop(o) {
        var i = -1,
            length = o.length;

        (function loop() {
            i++;
            if (i === length) {
                o.callback();
                return;
            }

            // "setTimeout" added by Jim McLeod
            setTimeout(function() {
                o.functionToLoop(loop, i);
            }, 1);
        })();
    }


    /**
     * remove black frames from the beginning to the specified frame
     * @param {Array} _frames - array of frames to be checked
     * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
     * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
     * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
     * @returns {Array} - array of frames
     */
    // pull#293 by @volodalexey
    function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance, callback) {
        var localCanvas = document.createElement('canvas');
        localCanvas.width = canvas.width;
        localCanvas.height = canvas.height;
        var context2d = localCanvas.getContext('2d');
        var resultFrames = [];

        var checkUntilNotBlack = _framesToCheck === -1;
        var endCheckFrame = (_framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length) ?
            _framesToCheck : _frames.length;
        var sampleColor = {
            r: 0,
            g: 0,
            b: 0
        };
        var maxColorDifference = Math.sqrt(
            Math.pow(255, 2) +
            Math.pow(255, 2) +
            Math.pow(255, 2)
        );
        var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
        var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
        var doNotCheckNext = false;

        asyncLoop({
            length: endCheckFrame,
            functionToLoop: function(loop, f) {
                var matchPixCount, endPixCheck, maxPixCount;

                var finishImage = function() {
                    if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {
                        // console.log('removed black frame : ' + f + ' ; frame duration ' + _frames[f].duration);
                    } else {
                        // console.log('frame is passed : ' + f);
                        if (checkUntilNotBlack) {
                            doNotCheckNext = true;
                        }
                        resultFrames.push(_frames[f]);
                    }
                    loop();
                };

                if (!doNotCheckNext) {
                    var image = new Image();
                    image.onload = function() {
                        context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
                        var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
                        matchPixCount = 0;
                        endPixCheck = imageData.data.length;
                        maxPixCount = imageData.data.length / 4;

                        for (var pix = 0; pix < endPixCheck; pix += 4) {
                            var currentColor = {
                                r: imageData.data[pix],
                                g: imageData.data[pix + 1],
                                b: imageData.data[pix + 2]
                            };
                            var colorDifference = Math.sqrt(
                                Math.pow(currentColor.r - sampleColor.r, 2) +
                                Math.pow(currentColor.g - sampleColor.g, 2) +
                                Math.pow(currentColor.b - sampleColor.b, 2)
                            );
                            // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)
                            if (colorDifference <= maxColorDifference * pixTolerance) {
                                matchPixCount++;
                            }
                        }
                        finishImage();
                    };
                    image.src = _frames[f].image;
                } else {
                    finishImage();
                }
            },
            callback: function() {
                resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));

                if (resultFrames.length <= 0) {
                    // at least one last frame should be available for next manipulation
                    // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
                    resultFrames.push(_frames[_frames.length - 1]);
                }
                callback(resultFrames);
            }
        });
    }

    var isStopDrawing = false;

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        isStopDrawing = true;

        var _this = this;
        // analyse of all frames takes some time!
        setTimeout(function() {
            // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
            // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
            // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
            dropBlackFrames(whammy.frames, -1, null, null, function(frames) {
                whammy.frames = frames;

                // to display advertisement images!
                if (config.advertisement && config.advertisement.length) {
                    whammy.frames = config.advertisement.concat(whammy.frames);
                }

                /**
                 * @property {Blob} blob - Recorded frames in video/webm blob.
                 * @memberof WhammyRecorder
                 * @example
                 * recorder.stop(function() {
                 *     var blob = recorder.blob;
                 * });
                 */
                whammy.compile(function(blob) {
                    _this.blob = blob;

                    if (_this.blob.forEach) {
                        _this.blob = new Blob([], {
                            type: 'video/webm'
                        });
                    }

                    if (callback) {
                        callback(_this.blob);
                    }
                });
            });
        }, 10);
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (isStopDrawing) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (!isStopDrawing) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isStopDrawing = true;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'WhammyRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    var video;
    var lastTime;
    var whammy;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WhammyRecorder = WhammyRecorder;
}

// https://github.com/antimatter15/whammy/blob/master/LICENSE
// _________
// Whammy.js

// todo: Firefox now supports webp for webm containers!
// their MediaRecorder implementation works well!
// should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?

/**
 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
 * @summary A real time javascript webm encoder based on a canvas hack.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef Whammy
 * @class
 * @example
 * var recorder = new Whammy().Video(15);
 * recorder.add(context || canvas || dataURL);
 * var output = recorder.compile();
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Whammy = (function() {
    // a more abstract-ish API

    function WhammyVideo(duration) {
        this.frames = [];
        this.duration = duration || 1;
        this.quality = 0.8;
    }

    /**
     * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.add(canvas || context || 'image/webp');
     * @param {string} frame - Canvas || Context || image/webp
     * @param {number} duration - Stick a duration (in milliseconds)
     */
    WhammyVideo.prototype.add = function(frame, duration) {
        if ('canvas' in frame) { //CanvasRenderingContext2D
            frame = frame.canvas;
        }

        if ('toDataURL' in frame) {
            frame = frame.toDataURL('image/webp', this.quality);
        }

        if (!(/^data:image\/webp;base64,/ig).test(frame)) {
            throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
        }
        this.frames.push({
            image: frame,
            duration: duration || this.duration
        });
    };

    function processInWebWorker(_function) {
        var blob = URL.createObjectURL(new Blob([_function.toString(),
            'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(blob);
        URL.revokeObjectURL(blob);
        return worker;
    }

    function whammyInWebWorker(frames) {
        function ArrayToWebM(frames) {
            var info = checkFrames(frames);
            if (!info) {
                return [];
            }

            var clusterMaxDuration = 30000;

            var EBML = [{
                'id': 0x1a45dfa3, // EBML
                'data': [{
                    'data': 1,
                    'id': 0x4286 // EBMLVersion
                }, {
                    'data': 1,
                    'id': 0x42f7 // EBMLReadVersion
                }, {
                    'data': 4,
                    'id': 0x42f2 // EBMLMaxIDLength
                }, {
                    'data': 8,
                    'id': 0x42f3 // EBMLMaxSizeLength
                }, {
                    'data': 'webm',
                    'id': 0x4282 // DocType
                }, {
                    'data': 2,
                    'id': 0x4287 // DocTypeVersion
                }, {
                    'data': 2,
                    'id': 0x4285 // DocTypeReadVersion
                }]
            }, {
                'id': 0x18538067, // Segment
                'data': [{
                    'id': 0x1549a966, // Info
                    'data': [{
                        'data': 1e6, //do things in millisecs (num of nanosecs for duration scale)
                        'id': 0x2ad7b1 // TimecodeScale
                    }, {
                        'data': 'whammy',
                        'id': 0x4d80 // MuxingApp
                    }, {
                        'data': 'whammy',
                        'id': 0x5741 // WritingApp
                    }, {
                        'data': doubleToString(info.duration),
                        'id': 0x4489 // Duration
                    }]
                }, {
                    'id': 0x1654ae6b, // Tracks
                    'data': [{
                        'id': 0xae, // TrackEntry
                        'data': [{
                            'data': 1,
                            'id': 0xd7 // TrackNumber
                        }, {
                            'data': 1,
                            'id': 0x73c5 // TrackUID
                        }, {
                            'data': 0,
                            'id': 0x9c // FlagLacing
                        }, {
                            'data': 'und',
                            'id': 0x22b59c // Language
                        }, {
                            'data': 'V_VP8',
                            'id': 0x86 // CodecID
                        }, {
                            'data': 'VP8',
                            'id': 0x258688 // CodecName
                        }, {
                            'data': 1,
                            'id': 0x83 // TrackType
                        }, {
                            'id': 0xe0, // Video
                            'data': [{
                                'data': info.width,
                                'id': 0xb0 // PixelWidth
                            }, {
                                'data': info.height,
                                'id': 0xba // PixelHeight
                            }]
                        }]
                    }]
                }]
            }];

            //Generate clusters (max duration)
            var frameNumber = 0;
            var clusterTimecode = 0;
            while (frameNumber < frames.length) {

                var clusterFrames = [];
                var clusterDuration = 0;
                do {
                    clusterFrames.push(frames[frameNumber]);
                    clusterDuration += frames[frameNumber].duration;
                    frameNumber++;
                } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);

                var clusterCounter = 0;
                var cluster = {
                    'id': 0x1f43b675, // Cluster
                    'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
                }; //Add cluster to segment
                EBML[1].data.push(cluster);
                clusterTimecode += clusterDuration;
            }

            return generateEBML(EBML);
        }

        function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
            return [{
                'data': clusterTimecode,
                'id': 0xe7 // Timecode
            }].concat(clusterFrames.map(function(webp) {
                var block = makeSimpleBlock({
                    discardable: 0,
                    frame: webp.data.slice(4),
                    invisible: 0,
                    keyframe: 1,
                    lacing: 0,
                    trackNum: 1,
                    timecode: Math.round(clusterCounter)
                });
                clusterCounter += webp.duration;
                return {
                    data: block,
                    id: 0xa3
                };
            }));
        }

        // sums the lengths of all the frames and gets the duration

        function checkFrames(frames) {
            if (!frames[0]) {
                postMessage({
                    error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
                });
                return;
            }

            var width = frames[0].width,
                height = frames[0].height,
                duration = frames[0].duration;

            for (var i = 1; i < frames.length; i++) {
                duration += frames[i].duration;
            }
            return {
                duration: duration,
                width: width,
                height: height
            };
        }

        function numToBuffer(num) {
            var parts = [];
            while (num > 0) {
                parts.push(num & 0xff);
                num = num >> 8;
            }
            return new Uint8Array(parts.reverse());
        }

        function strToBuffer(str) {
            return new Uint8Array(str.split('').map(function(e) {
                return e.charCodeAt(0);
            }));
        }

        function bitsToBuffer(bits) {
            var data = [];
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data.push(parseInt(bits.substr(i, 8), 2));
            }
            return new Uint8Array(data);
        }

        function generateEBML(json) {
            var ebml = [];
            for (var i = 0; i < json.length; i++) {
                var data = json[i].data;

                if (typeof data === 'object') {
                    data = generateEBML(data);
                }

                if (typeof data === 'number') {
                    data = bitsToBuffer(data.toString(2));
                }

                if (typeof data === 'string') {
                    data = strToBuffer(data);
                }

                var len = data.size || data.byteLength || data.length;
                var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
                var sizeToString = len.toString(2);
                var padded = (new Array((zeroes * 7 + 7 + 1) - sizeToString.length)).join('0') + sizeToString;
                var size = (new Array(zeroes)).join('0') + '1' + padded;

                ebml.push(numToBuffer(json[i].id));
                ebml.push(bitsToBuffer(size));
                ebml.push(data);
            }

            return new Blob(ebml, {
                type: 'video/webm'
            });
        }

        function toBinStrOld(bits) {
            var data = '';
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
            }
            return data;
        }

        function makeSimpleBlock(data) {
            var flags = 0;

            if (data.keyframe) {
                flags |= 128;
            }

            if (data.invisible) {
                flags |= 8;
            }

            if (data.lacing) {
                flags |= (data.lacing << 1);
            }

            if (data.discardable) {
                flags |= 1;
            }

            if (data.trackNum > 127) {
                throw 'TrackNumber > 127 not supported';
            }

            var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function(e) {
                return String.fromCharCode(e);
            }).join('') + data.frame;

            return out;
        }

        function parseWebP(riff) {
            var VP8 = riff.RIFF[0].WEBP[0];

            var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header
            for (var i = 0, c = []; i < 4; i++) {
                c[i] = VP8.charCodeAt(frameStart + 3 + i);
            }

            var width, height, tmp;

            //the code below is literally copied verbatim from the bitstream spec
            tmp = (c[1] << 8) | c[0];
            width = tmp & 0x3FFF;
            tmp = (c[3] << 8) | c[2];
            height = tmp & 0x3FFF;
            return {
                width: width,
                height: height,
                data: VP8,
                riff: riff
            };
        }

        function getStrLength(string, offset) {
            return parseInt(string.substr(offset + 4, 4).split('').map(function(i) {
                var unpadded = i.charCodeAt(0).toString(2);
                return (new Array(8 - unpadded.length + 1)).join('0') + unpadded;
            }).join(''), 2);
        }

        function parseRIFF(string) {
            var offset = 0;
            var chunks = {};

            while (offset < string.length) {
                var id = string.substr(offset, 4);
                var len = getStrLength(string, offset);
                var data = string.substr(offset + 4 + 4, len);
                offset += 4 + 4 + len;
                chunks[id] = chunks[id] || [];

                if (id === 'RIFF' || id === 'LIST') {
                    chunks[id].push(parseRIFF(data));
                } else {
                    chunks[id].push(data);
                }
            }
            return chunks;
        }

        function doubleToString(num) {
            return [].slice.call(
                new Uint8Array((new Float64Array([num])).buffer), 0).map(function(e) {
                return String.fromCharCode(e);
            }).reverse().join('');
        }

        var webm = new ArrayToWebM(frames.map(function(frame) {
            var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
            webp.duration = frame.duration;
            return webp;
        }));

        postMessage(webm);
    }

    /**
     * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.compile(function(blob) {
     *    // blob.size - blob.type
     * });
     */
    WhammyVideo.prototype.compile = function(callback) {
        var webWorker = processInWebWorker(whammyInWebWorker);

        webWorker.onmessage = function(event) {
            if (event.data.error) {
                console.error(event.data.error);
                return;
            }
            callback(event.data);
        };

        webWorker.postMessage(this.frames);
    };

    return {
        /**
         * A more abstract-ish API.
         * @method
         * @memberof Whammy
         * @example
         * recorder = new Whammy().Video(0.8, 100);
         * @param {?number} speed - 0.8
         * @param {?number} quality - 100
         */
        Video: WhammyVideo
    };
})();

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Whammy = Whammy;
}

// ______________ (indexed-db)
// DiskStorage.js

/**
 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
 * @summary Writing blobs into IndexedDB.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @example
 * DiskStorage.Store({
 *     audioBlob: yourAudioBlob,
 *     videoBlob: yourVideoBlob,
 *     gifBlob  : yourGifBlob
 * });
 * DiskStorage.Fetch(function(dataURL, type) {
 *     if(type === 'audioBlob') { }
 *     if(type === 'videoBlob') { }
 *     if(type === 'gifBlob')   { }
 * });
 * // DiskStorage.dataStoreName = 'recordRTC';
 * // DiskStorage.onError = function(error) { };
 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
 * @property {function} Store - This method stores blobs in IndexedDB.
 * @property {function} onError - This function is invoked for any known/unknown error.
 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


var DiskStorage = {
    /**
     * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.init();
     */
    init: function() {
        var self = this;

        if (typeof indexedDB === 'undefined' || typeof indexedDB.open === 'undefined') {
            console.error('IndexedDB API are not available in this browser.');
            return;
        }

        var dbVersion = 1;
        var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
            db;
        var request = indexedDB.open(dbName, dbVersion);

        function createObjectStore(dataBase) {
            dataBase.createObjectStore(self.dataStoreName);
        }

        function putInDB() {
            var transaction = db.transaction([self.dataStoreName], 'readwrite');

            if (self.videoBlob) {
                transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
            }

            if (self.gifBlob) {
                transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
            }

            if (self.audioBlob) {
                transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
            }

            function getFromStore(portionName) {
                transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
                    if (self.callback) {
                        self.callback(event.target.result, portionName);
                    }
                };
            }

            getFromStore('audioBlob');
            getFromStore('videoBlob');
            getFromStore('gifBlob');
        }

        request.onerror = self.onError;

        request.onsuccess = function() {
            db = request.result;
            db.onerror = self.onError;

            if (db.setVersion) {
                if (db.version !== dbVersion) {
                    var setVersion = db.setVersion(dbVersion);
                    setVersion.onsuccess = function() {
                        createObjectStore(db);
                        putInDB();
                    };
                } else {
                    putInDB();
                }
            } else {
                putInDB();
            }
        };
        request.onupgradeneeded = function(event) {
            createObjectStore(event.target.result);
        };
    },
    /**
     * This method fetches stored blobs from IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Fetch(function(dataURL, type) {
     *     if(type === 'audioBlob') { }
     *     if(type === 'videoBlob') { }
     *     if(type === 'gifBlob')   { }
     * });
     */
    Fetch: function(callback) {
        this.callback = callback;
        this.init();

        return this;
    },
    /**
     * This method stores blobs in IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Store({
     *     audioBlob: yourAudioBlob,
     *     videoBlob: yourVideoBlob,
     *     gifBlob  : yourGifBlob
     * });
     */
    Store: function(config) {
        this.audioBlob = config.audioBlob;
        this.videoBlob = config.videoBlob;
        this.gifBlob = config.gifBlob;

        this.init();

        return this;
    },
    /**
     * This function is invoked for any known/unknown error.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.onError = function(error){
     *     alerot( JSON.stringify(error) );
     * };
     */
    onError: function(error) {
        console.error(JSON.stringify(error, null, '\t'));
    },

    /**
     * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.dataStoreName = 'recordRTC';
     */
    dataStoreName: 'recordRTC',
    dbName: null
};

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.DiskStorage = DiskStorage;
}

// ______________
// GifRecorder.js

/**
 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef GifRecorder
 * @class
 * @example
 * var recorder = new GifRecorder(mediaStream || canvas || context, { onGifPreview: function, onGifRecordingStarted: function, width: 1280, height: 720, frameRate: 200, quality: 10 });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     img.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
 */

function GifRecorder(mediaStream, config) {
    if (typeof GIFEncoder === 'undefined') {
        var script = document.createElement('script');
        script.src = 'https://www.webrtc-experiment.com/gif-recorder.js';
        (document.body || document.documentElement).appendChild(script);
    }

    config = config || {};

    var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;

    /**
     * This method records MediaStream.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (typeof GIFEncoder === 'undefined') {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isLoadedMetaData) {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isHTMLObject) {
            if (!config.width) {
                config.width = video.offsetWidth || 320;
            }

            if (!config.height) {
                config.height = video.offsetHeight || 240;
            }

            if (!config.video) {
                config.video = {
                    width: config.width,
                    height: config.height
                };
            }

            if (!config.canvas) {
                config.canvas = {
                    width: config.width,
                    height: config.height
                };
            }

            canvas.width = config.canvas.width || 320;
            canvas.height = config.canvas.height || 240;

            video.width = config.video.width || 320;
            video.height = config.video.height || 240;
        }

        // external library to record as GIF images
        gifEncoder = new GIFEncoder();

        // void setRepeat(int iter) 
        // Sets the number of times the set of GIF frames should be played. 
        // Default is 1; 0 means play indefinitely.
        gifEncoder.setRepeat(0);

        // void setFrameRate(Number fps) 
        // Sets frame rate in frames per second. 
        // Equivalent to setDelay(1000/fps).
        // Using "setDelay" instead of "setFrameRate"
        gifEncoder.setDelay(config.frameRate || 200);

        // void setQuality(int quality) 
        // Sets quality of color quantization (conversion of images to the 
        // maximum 256 colors allowed by the GIF specification). 
        // Lower values (minimum = 1) produce better colors, 
        // but slow processing significantly. 10 is the default, 
        // and produces good color mapping at reasonable speeds. 
        // Values greater than 20 do not yield significant improvements in speed.
        gifEncoder.setQuality(config.quality || 10);

        // Boolean start() 
        // This writes the GIF Header and returns false if it fails.
        gifEncoder.start();

        if (typeof config.onGifRecordingStarted === 'function') {
            config.onGifRecordingStarted();
        }

        startTime = Date.now();

        function drawVideoFrame(time) {
            if (self.clearedRecordedData === true) {
                return;
            }

            if (isPausedRecording) {
                return setTimeout(function() {
                    drawVideoFrame(time);
                }, 100);
            }

            lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

            if (typeof lastFrameTime === undefined) {
                lastFrameTime = time;
            }

            // ~10 fps
            if (time - lastFrameTime < 90) {
                return;
            }

            if (!isHTMLObject && video.paused) {
                // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
                // Tweak for Android Chrome
                video.play();
            }

            if (!isHTMLObject) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
            }

            if (config.onGifPreview) {
                config.onGifPreview(canvas.toDataURL('image/png'));
            }

            gifEncoder.addFrame(context);
            lastFrameTime = time;
        }

        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

        if (config.initCallback) {
            config.initCallback();
        }
    };

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.stop(function(blob) {
     *     img.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        if (lastAnimationFrame) {
            cancelAnimationFrame(lastAnimationFrame);
        }

        endTime = Date.now();

        /**
         * @property {Blob} blob - The recorded blob object.
         * @memberof GifRecorder
         * @example
         * recorder.stop(function(){
         *     var blob = recorder.blob;
         * });
         */
        this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
            type: 'image/gif'
        });

        callback(this.blob);

        // bug: find a way to clear old recorded blobs
        gifEncoder.stream().bin = [];
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        self.clearedRecordedData = true;
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        if (gifEncoder) {
            gifEncoder.stream().bin = [];
        }
    }

    // for debugging
    this.name = 'GifRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    if (isHTMLObject) {
        if (mediaStream instanceof CanvasRenderingContext2D) {
            context = mediaStream;
            canvas = context.canvas;
        } else if (mediaStream instanceof HTMLCanvasElement) {
            context = mediaStream.getContext('2d');
            canvas = mediaStream;
        }
    }

    var isLoadedMetaData = true;

    if (!isHTMLObject) {
        var video = document.createElement('video');
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;

        isLoadedMetaData = false;
        video.onloadedmetadata = function() {
            isLoadedMetaData = true;
        };

        setSrcObject(mediaStream, video);

        video.play();
    }

    var lastAnimationFrame = null;
    var startTime, endTime, lastFrameTime;

    var gifEncoder;

    var self = this;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.GifRecorder = GifRecorder;
}

// Last time updated: 2019-06-21 4:09:42 AM UTC

// ________________________
// MultiStreamsMixer v1.2.2

// Open-Sourced: https://github.com/muaz-khan/MultiStreamsMixer

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

function MultiStreamsMixer(arrayOfMediaStreams, elementClass) {

    var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

    (function(that) {
        if (typeof RecordRTC !== 'undefined') {
            return;
        }

        if (!that) {
            return;
        }

        if (typeof window !== 'undefined') {
            return;
        }

        if (typeof global === 'undefined') {
            return;
        }

        global.navigator = {
            userAgent: browserFakeUserAgent,
            getUserMedia: function() {}
        };

        if (!global.console) {
            global.console = {};
        }

        if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
            global.console.error = global.console.log = global.console.log || function() {
                console.log(arguments);
            };
        }

        if (typeof document === 'undefined') {
            /*global document:true */
            that.document = {
                documentElement: {
                    appendChild: function() {
                        return '';
                    }
                }
            };

            document.createElement = document.captureStream = document.mozCaptureStream = function() {
                var obj = {
                    getContext: function() {
                        return obj;
                    },
                    play: function() {},
                    pause: function() {},
                    drawImage: function() {},
                    toDataURL: function() {
                        return '';
                    },
                    style: {}
                };
                return obj;
            };

            that.HTMLVideoElement = function() {};
        }

        if (typeof location === 'undefined') {
            /*global location:true */
            that.location = {
                protocol: 'file:',
                href: '',
                hash: ''
            };
        }

        if (typeof screen === 'undefined') {
            /*global screen:true */
            that.screen = {
                width: 0,
                height: 0
            };
        }

        if (typeof URL === 'undefined') {
            /*global screen:true */
            that.URL = {
                createObjectURL: function() {
                    return '';
                },
                revokeObjectURL: function() {
                    return '';
                }
            };
        }

        /*global window:true */
        that.window = global;
    })(typeof global !== 'undefined' ? global : null);

    // requires: chrome://flags/#enable-experimental-web-platform-features

    elementClass = elementClass || 'multi-streams-mixer';

    var videos = [];
    var isStopDrawingFrames = false;

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.style.opacity = 0;
    canvas.style.position = 'absolute';
    canvas.style.zIndex = -1;
    canvas.style.top = '-1000em';
    canvas.style.left = '-1000em';
    canvas.className = elementClass;
    (document.body || document.documentElement).appendChild(canvas);

    this.disableLogs = false;
    this.frameInterval = 10;

    this.width = 360;
    this.height = 240;

    // use gain node to prevent echo
    this.useGainNode = true;

    var self = this;

    // _____________________________
    // Cross-Browser-Declarations.js

    // WebAudio API representer
    var AudioContext = window.AudioContext;

    if (typeof AudioContext === 'undefined') {
        if (typeof webkitAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = webkitAudioContext;
        }

        if (typeof mozAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = mozAudioContext;
        }
    }

    /*jshint -W079 */
    var URL = window.URL;

    if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
        /*global URL:true */
        URL = webkitURL;
    }

    if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
        if (typeof navigator.webkitGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.webkitGetUserMedia;
        }

        if (typeof navigator.mozGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.mozGetUserMedia;
        }
    }

    var MediaStream = window.MediaStream;

    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
        MediaStream = webkitMediaStream;
    }

    /*global MediaStream:true */
    if (typeof MediaStream !== 'undefined') {
        // override "stop" method for all browsers
        if (typeof MediaStream.prototype.stop === 'undefined') {
            MediaStream.prototype.stop = function() {
                this.getTracks().forEach(function(track) {
                    track.stop();
                });
            };
        }
    }

    var Storage = {};

    if (typeof AudioContext !== 'undefined') {
        Storage.AudioContext = AudioContext;
    } else if (typeof webkitAudioContext !== 'undefined') {
        Storage.AudioContext = webkitAudioContext;
    }

    function setSrcObject(stream, element) {
        if ('srcObject' in element) {
            element.srcObject = stream;
        } else if ('mozSrcObject' in element) {
            element.mozSrcObject = stream;
        } else {
            element.srcObject = stream;
        }
    }

    this.startDrawingFrames = function() {
        drawVideosToCanvas();
    };

    function drawVideosToCanvas() {
        if (isStopDrawingFrames) {
            return;
        }

        var videosLength = videos.length;

        var fullcanvas = false;
        var remaining = [];
        videos.forEach(function(video) {
            if (!video.stream) {
                video.stream = {};
            }

            if (video.stream.fullcanvas) {
                fullcanvas = video;
            } else {
                // todo: video.stream.active or video.stream.live to fix blank frames issues?
                remaining.push(video);
            }
        });

        if (fullcanvas) {
            canvas.width = fullcanvas.stream.width;
            canvas.height = fullcanvas.stream.height;
        } else if (remaining.length) {
            canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;

            var height = 1;
            if (videosLength === 3 || videosLength === 4) {
                height = 2;
            }
            if (videosLength === 5 || videosLength === 6) {
                height = 3;
            }
            if (videosLength === 7 || videosLength === 8) {
                height = 4;
            }
            if (videosLength === 9 || videosLength === 10) {
                height = 5;
            }
            canvas.height = remaining[0].height * height;
        } else {
            canvas.width = self.width || 360;
            canvas.height = self.height || 240;
        }

        if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
            drawImage(fullcanvas);
        }

        remaining.forEach(function(video, idx) {
            drawImage(video, idx);
        });

        setTimeout(drawVideosToCanvas, self.frameInterval);
    }

    function drawImage(video, idx) {
        if (isStopDrawingFrames) {
            return;
        }

        var x = 0;
        var y = 0;
        var width = video.width;
        var height = video.height;

        if (idx === 1) {
            x = video.width;
        }

        if (idx === 2) {
            y = video.height;
        }

        if (idx === 3) {
            x = video.width;
            y = video.height;
        }

        if (idx === 4) {
            y = video.height * 2;
        }

        if (idx === 5) {
            x = video.width;
            y = video.height * 2;
        }

        if (idx === 6) {
            y = video.height * 3;
        }

        if (idx === 7) {
            x = video.width;
            y = video.height * 3;
        }

        if (typeof video.stream.left !== 'undefined') {
            x = video.stream.left;
        }

        if (typeof video.stream.top !== 'undefined') {
            y = video.stream.top;
        }

        if (typeof video.stream.width !== 'undefined') {
            width = video.stream.width;
        }

        if (typeof video.stream.height !== 'undefined') {
            height = video.stream.height;
        }

        context.drawImage(video, x, y, width, height);

        if (typeof video.stream.onRender === 'function') {
            video.stream.onRender(context, x, y, width, height, idx);
        }
    }

    function getMixedStream() {
        isStopDrawingFrames = false;
        var mixedVideoStream = getMixedVideoStream();

        var mixedAudioStream = getMixedAudioStream();
        if (mixedAudioStream) {
            mixedAudioStream.getTracks().filter(function(t) {
                return t.kind === 'audio';
            }).forEach(function(track) {
                mixedVideoStream.addTrack(track);
            });
        }

        var fullcanvas;
        arrayOfMediaStreams.forEach(function(stream) {
            if (stream.fullcanvas) {
                fullcanvas = true;
            }
        });

        // mixedVideoStream.prototype.appendStreams = appendStreams;
        // mixedVideoStream.prototype.resetVideoStreams = resetVideoStreams;
        // mixedVideoStream.prototype.clearRecordedData = clearRecordedData;

        return mixedVideoStream;
    }

    function getMixedVideoStream() {
        resetVideoStreams();

        var capturedStream;

        if ('captureStream' in canvas) {
            capturedStream = canvas.captureStream();
        } else if ('mozCaptureStream' in canvas) {
            capturedStream = canvas.mozCaptureStream();
        } else if (!self.disableLogs) {
            console.error('Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features');
        }

        var videoStream = new MediaStream();

        capturedStream.getTracks().filter(function(t) {
            return t.kind === 'video';
        }).forEach(function(track) {
            videoStream.addTrack(track);
        });

        canvas.stream = videoStream;

        return videoStream;
    }

    function getMixedAudioStream() {
        // via: @pehrsons
        if (!Storage.AudioContextConstructor) {
            Storage.AudioContextConstructor = new Storage.AudioContext();
        }

        self.audioContext = Storage.AudioContextConstructor;

        self.audioSources = [];

        if (self.useGainNode === true) {
            self.gainNode = self.audioContext.createGain();
            self.gainNode.connect(self.audioContext.destination);
            self.gainNode.gain.value = 0; // don't hear self
        }

        var audioTracksLength = 0;
        arrayOfMediaStreams.forEach(function(stream) {
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length) {
                return;
            }

            audioTracksLength++;

            var audioSource = self.audioContext.createMediaStreamSource(stream);

            if (self.useGainNode === true) {
                audioSource.connect(self.gainNode);
            }

            self.audioSources.push(audioSource);
        });

        if (!audioTracksLength) {
            // because "self.audioContext" is not initialized
            // that's why we've to ignore rest of the code
            return;
        }

        self.audioDestination = self.audioContext.createMediaStreamDestination();
        self.audioSources.forEach(function(audioSource) {
            audioSource.connect(self.audioDestination);
        });
        return self.audioDestination.stream;
    }

    function getVideo(stream) {
        var video = document.createElement('video');

        setSrcObject(stream, video);

        video.className = elementClass;

        video.muted = true;
        video.volume = 0;

        video.width = stream.width || self.width || 360;
        video.height = stream.height || self.height || 240;

        video.play();

        return video;
    }

    this.appendStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        streams.forEach(function(stream) {
            var newStream = new MediaStream();

            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
                var video = getVideo(stream);
                video.stream = stream;
                videos.push(video);

                newStream.addTrack(stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                })[0]);
            }

            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length) {
                var audioSource = self.audioContext.createMediaStreamSource(stream);
                self.audioDestination = self.audioContext.createMediaStreamDestination();
                audioSource.connect(self.audioDestination);

                newStream.addTrack(self.audioDestination.stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                })[0]);
            }

            arrayOfMediaStreams.push(newStream);
        });
    };

    this.releaseStreams = function() {
        videos = [];
        isStopDrawingFrames = true;

        if (self.gainNode) {
            self.gainNode.disconnect();
            self.gainNode = null;
        }

        if (self.audioSources.length) {
            self.audioSources.forEach(function(source) {
                source.disconnect();
            });
            self.audioSources = [];
        }

        if (self.audioDestination) {
            self.audioDestination.disconnect();
            self.audioDestination = null;
        }

        if (self.audioContext) {
            self.audioContext.close();
        }

        self.audioContext = null;

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (canvas.stream) {
            canvas.stream.stop();
            canvas.stream = null;
        }
    };

    this.resetVideoStreams = function(streams) {
        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        resetVideoStreams(streams);
    };

    function resetVideoStreams(streams) {
        videos = [];
        streams = streams || arrayOfMediaStreams;

        // via: @adrian-ber
        streams.forEach(function(stream) {
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
                return;
            }

            var video = getVideo(stream);
            video.stream = stream;
            videos.push(video);
        });
    }

    // for debugging
    this.name = 'MultiStreamsMixer';
    this.toString = function() {
        return this.name;
    };

    this.getMixedStream = getMixedStream;

}

if (typeof RecordRTC === 'undefined') {
    if (typeof module !== 'undefined' /* && !!module.exports*/ ) {
        module.exports = MultiStreamsMixer;
    }

    if (typeof define === 'function' && define.amd) {
        define('MultiStreamsMixer', [], function() {
            return MultiStreamsMixer;
        });
    }
}

// ______________________
// MultiStreamRecorder.js

/*
 * Video conference recording, using captureStream API along with WebAudio and Canvas2D API.
 */

/**
 * MultiStreamRecorder can record multiple videos in single container.
 * @summary Multi-videos recorder.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef MultiStreamRecorder
 * @class
 * @example
 * var options = {
 *     mimeType: 'video/webm'
 * }
 * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStreams} mediaStreams - Array of MediaStreams.
 * @param {object} config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
 */

function MultiStreamRecorder(arrayOfMediaStreams, options) {
    arrayOfMediaStreams = arrayOfMediaStreams || [];
    var self = this;

    var mixer;
    var mediaRecorder;

    options = options || {
        elementClass: 'multi-streams-mixer',
        mimeType: 'video/webm',
        video: {
            width: 360,
            height: 240
        }
    };

    if (!options.frameInterval) {
        options.frameInterval = 10;
    }

    if (!options.video) {
        options.video = {};
    }

    if (!options.video.width) {
        options.video.width = 360;
    }

    if (!options.video.height) {
        options.video.height = 240;
    }

    /**
     * This method records all MediaStreams.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // github/muaz-khan/MultiStreamsMixer
        mixer = new MultiStreamsMixer(arrayOfMediaStreams, options.elementClass || 'multi-streams-mixer');

        if (getAllVideoTracks().length) {
            mixer.frameInterval = options.frameInterval || 10;
            mixer.width = options.video.width || 360;
            mixer.height = options.video.height || 240;
            mixer.startDrawingFrames();
        }

        if (options.previewStream && typeof options.previewStream === 'function') {
            options.previewStream(mixer.getMixedStream());
        }

        // record using MediaRecorder API
        mediaRecorder = new MediaStreamRecorder(mixer.getMixedStream(), options);
        mediaRecorder.record();
    };

    function getAllVideoTracks() {
        var tracks = [];
        arrayOfMediaStreams.forEach(function(stream) {
            getTracks(stream, 'video').forEach(function(track) {
                tracks.push(track);
            });
        });
        return tracks;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        if (!mediaRecorder) {
            return;
        }

        mediaRecorder.stop(function(blob) {
            self.blob = blob;

            callback(blob);

            self.clearRecordedData();
        });
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (mediaRecorder) {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (mediaRecorder) {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder = null;
        }

        if (mixer) {
            mixer.releaseStreams();
            mixer = null;
        }
    };

    /**
     * Add extra media-streams to existing recordings.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.addStreams([newAudioStream, newVideoStream]);
     */
    this.addStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        if (!mediaRecorder || !mixer) {
            return;
        }

        mixer.appendStreams(streams);

        if (options.previewStream && typeof options.previewStream === 'function') {
            options.previewStream(mixer.getMixedStream());
        }
    };

    /**
     * Reset videos during live recording. Replace old videos e.g. replace cameras with full-screen.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.resetVideoStreams([newVideo1, newVideo2]);
     */
    this.resetVideoStreams = function(streams) {
        if (!mixer) {
            return;
        }

        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        mixer.resetVideoStreams(streams);
    };

    /**
     * Returns MultiStreamsMixer
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * let mixer = recorder.getMixer();
     * mixer.appendStreams([newStream]);
     */
    this.getMixer = function() {
        return mixer;
    };

    // for debugging
    this.name = 'MultiStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MultiStreamRecorder = MultiStreamRecorder;
}

// _____________________
// RecordRTC.promises.js

/**
 * RecordRTCPromisesHandler adds promises support in {@link RecordRTC}. Try a {@link https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/RecordRTCPromisesHandler.html|demo here}
 * @summary Promises for {@link RecordRTC}
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCPromisesHandler
 * @class
 * @example
 * var recorder = new RecordRTCPromisesHandler(mediaStream, options);
 * recorder.startRecording()
 *         .then(successCB)
 *         .catch(errorCB);
 * // Note: You can access all RecordRTC API using "recorder.recordRTC" e.g. 
 * recorder.recordRTC.onStateChanged = function(state) {};
 * recorder.recordRTC.setRecordingDuration(5000);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 * @throws Will throw an error if "new" keyword is not used to initiate "RecordRTCPromisesHandler". Also throws error if first argument "MediaStream" is missing.
 * @requires {@link RecordRTC}
 */

function RecordRTCPromisesHandler(mediaStream, options) {
    if (!this) {
        throw 'Use "new RecordRTCPromisesHandler()"';
    }

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    var self = this;

    /**
     * @property {Blob} blob - Access/reach the native {@link RecordRTC} object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * let internal = recorder.recordRTC.getInternalRecorder();
     * alert(internal instanceof MediaStreamRecorder);
     * recorder.recordRTC.onStateChanged = function(state) {};
     */
    self.recordRTC = new RecordRTC(mediaStream, options);

    /**
     * This method records MediaStream.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.startRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.startRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.startRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method stops the recording.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.stopRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.stopRecording(function(url) {
                    self.blob = self.recordRTC.getBlob();

                    if (!self.blob || !self.blob.size) {
                        reject('Empty blob.', self.blob);
                        return;
                    }

                    resolve(url);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method pauses the recording. You can resume recording using "resumeRecording" method.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.pauseRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.pauseRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.pauseRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method resumes the recording.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.resumeRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.resumeRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.resumeRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns data-url for the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getDataURL().then(function(dataURL) {
     *         window.open(dataURL);
     *     }).catch(errorCB);;
     * }).catch(errorCB);
     */
    this.getDataURL = function(callback) {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.getDataURL(function(dataURL) {
                    resolve(dataURL);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getBlob().then(function(blob) {})
     * }).catch(errorCB);
     */
    this.getBlob = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.getBlob());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns the internal recording object.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * let internalRecorder = await recorder.getInternalRecorder();
     * if(internalRecorder instanceof MultiStreamRecorder) {
     *     internalRecorder.addStreams([newAudioStream]);
     *     internalRecorder.resetVideoStreams([screenStream]);
     * }
     * @returns {Object} 
     */
    this.getInternalRecorder = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.getInternalRecorder());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method resets the recorder. So that you can reuse single recorder instance many times.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * await recorder.reset();
     * recorder.startRecording(); // record again
     */
    this.reset = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.reset());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * Destroy RecordRTC instance. Clear all recorders and objects.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.destroy().then(successCB).catch(errorCB);
     */
    this.destroy = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.destroy());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * Get recorder's readonly state.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * let state = await recorder.getState();
     * // or
     * recorder.getState().then(state => { console.log(state); })
     * @returns {String} Returns recording state.
     */
    this.getState = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.getState());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * await recorder.stopRecording();
     * let blob = recorder.getBlob(); // or "recorder.recordRTC.blob"
     * invokeSaveAsDialog(blob);
     */
    this.blob = null;

    /**
     * RecordRTC version number
     * @property {String} version - Release version number.
     * @memberof RecordRTCPromisesHandler
     * @static
     * @readonly
     * @example
     * alert(recorder.version);
     */
    this.version = '5.6.1';
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler;
}

// ______________________
// WebAssemblyRecorder.js

/**
 * WebAssemblyRecorder lets you create webm videos in JavaScript via WebAssembly. The library consumes raw RGBA32 buffers (4 bytes per pixel) and turns them into a webm video with the given framerate and quality. This makes it compatible out-of-the-box with ImageData from a CANVAS. With realtime mode you can also use webm-wasm for streaming webm videos.
 * @summary Video recording feature in Chrome, Firefox and maybe Edge.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef WebAssemblyRecorder
 * @class
 * @example
 * var recorder = new WebAssemblyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {webAssemblyPath:'webm-wasm.wasm',workerPath: 'webm-worker.js', frameRate: 30, width: 1920, height: 1080, bitrate: 1024, realtime: true}
 */
function WebAssemblyRecorder(stream, config) {
    // based on: github.com/GoogleChromeLabs/webm-wasm

    if (typeof ReadableStream === 'undefined' || typeof WritableStream === 'undefined') {
        // because it fixes readable/writable streams issues
        console.error('Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js');
    }

    config = config || {};

    config.width = config.width || 640;
    config.height = config.height || 480;
    config.frameRate = config.frameRate || 30;
    config.bitrate = config.bitrate || 1200;
    config.realtime = config.realtime || true;

    function createBufferURL(buffer, type) {
        return URL.createObjectURL(new Blob([buffer], {
            type: type || ''
        }));
    }

    var finished;

    function cameraStream() {
        return new ReadableStream({
            start: function(controller) {
                var cvs = document.createElement('canvas');
                var video = document.createElement('video');
                var first = true;
                video.srcObject = stream;
                video.muted = true;
                video.height = config.height;
                video.width = config.width;
                video.volume = 0;
                video.onplaying = function() {
                    cvs.width = config.width;
                    cvs.height = config.height;
                    var ctx = cvs.getContext('2d');
                    var frameTimeout = 1000 / config.frameRate;
                    var cameraTimer = setInterval(function f() {
                        if (finished) {
                            clearInterval(cameraTimer);
                            controller.close();
                        }

                        if (first) {
                            first = false;
                            if (config.onVideoProcessStarted) {
                                config.onVideoProcessStarted();
                            }
                        }

                        ctx.drawImage(video, 0, 0);
                        if (controller._controlledReadableStream.state !== 'closed') {
                            try {
                                controller.enqueue(
                                    ctx.getImageData(0, 0, config.width, config.height)
                                );
                            } catch (e) {}
                        }
                    }, frameTimeout);
                };
                video.play();
            }
        });
    }

    var worker;

    function startRecording(stream, buffer) {
        if (!config.workerPath && !buffer) {
            finished = false;

            // is it safe to use @latest ?

            fetch(
                'https://unpkg.com/webm-wasm@latest/dist/webm-worker.js'
            ).then(function(r) {
                r.arrayBuffer().then(function(buffer) {
                    startRecording(stream, buffer);
                });
            });
            return;
        }

        if (!config.workerPath && buffer instanceof ArrayBuffer) {
            var blob = new Blob([buffer], {
                type: 'text/javascript'
            });
            config.workerPath = URL.createObjectURL(blob);
        }

        if (!config.workerPath) {
            console.error('workerPath parameter is missing.');
        }

        worker = new Worker(config.workerPath);

        worker.postMessage(config.webAssemblyPath || 'https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm');
        worker.addEventListener('message', function(event) {
            if (event.data === 'READY') {
                worker.postMessage({
                    width: config.width,
                    height: config.height,
                    bitrate: config.bitrate || 1200,
                    timebaseDen: config.frameRate || 30,
                    realtime: config.realtime
                });

                cameraStream().pipeTo(new WritableStream({
                    write: function(image) {
                        if (finished) {
                            console.error('Got image, but recorder is finished!');
                            return;
                        }

                        worker.postMessage(image.data.buffer, [image.data.buffer]);
                    }
                }));
            } else if (!!event.data) {
                if (!isPaused) {
                    arrayOfBuffers.push(event.data);
                }
            }
        });
    }

    /**
     * This method records video.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;
        startRecording(stream);

        if (typeof config.initCallback === 'function') {
            config.initCallback();
        }
    };

    var isPaused;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPaused = false;
    };

    function terminate(callback) {
        if (!worker) {
            if (callback) {
                callback();
            }

            return;
        }

        // Wait for null event data to indicate that the encoding is complete
        worker.addEventListener('message', function(event) {
            if (event.data === null) {
                worker.terminate();
                worker = null;

                if (callback) {
                    callback();
                }
            }
        });

        worker.postMessage(null);
    }

    var arrayOfBuffers = [];

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        finished = true;

        var recorder = this;

        terminate(function() {
            recorder.blob = new Blob(arrayOfBuffers, {
                type: 'video/webm'
            });

            callback(recorder.blob);
        });
    };

    // for debugging
    this.name = 'WebAssemblyRecorder';
    this.toString = function() {
        return this.name;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;

        // todo: if recording-ON then STOP it first
    };

    /**
     * @property {Blob} blob - The recorded blob object.
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(){
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WebAssemblyRecorder = WebAssemblyRecorder;
}

/////////////////////////////


'use strict';

// Last time updated: 2019-06-13 2:08:18 AM UTC

// ________________
// RecordRTC v5.5.5

// Open-Sourced: https://github.com/muaz-khan/RecordRTC

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

// ____________
// RecordRTC.js

/**
 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows. 
 * @summary Record audio, video or screen inside the browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTC
 * @class
 * @example
 * var recorder = RecordRTC(mediaStream or [arrayOfMediaStream], {
 *     type: 'video', // audio or video or gif or canvas
 *     recorderType: MediaStreamRecorder || CanvasRecorder || StereoAudioRecorder || Etc
 * });
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, desiredSampRate: 16000, video: HTMLVideoElement, etc.}
 */

function RecordRTC(mediaStream, config) {
    if (!mediaStream) {
        throw 'First parameter is required.';
    }

    config = config || {
        type: 'video'
    };

    config = new RecordRTCConfiguration(mediaStream, config);

    // a reference to user's recordRTC object
    var self = this;

    function startRecording(config2) {
        if (!!config2) {
            // allow users to set options using startRecording method
            // config2 is similar to main "config" object (second parameter over RecordRTC constructor)
            config = new RecordRTCConfiguration(mediaStream, config2);
        }

        if (!config.disableLogs) {
            console.log('started recording ' + config.type + ' stream.');
        }

        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder.record();

            setState('recording');

            if (self.recordingDuration) {
                handleRecordingDuration();
            }
            return self;
        }

        initRecorder(function() {
            if (self.recordingDuration) {
                handleRecordingDuration();
            }
        });

        return self;
    }

    function initRecorder(initCallback) {
        if (initCallback) {
            config.initCallback = function() {
                initCallback();
                initCallback = config.initCallback = null; // recorder.initRecorder should be call-backed once.
            };
        }

        var Recorder = new GetRecorderType(mediaStream, config);

        mediaRecorder = new Recorder(mediaStream, config);
        mediaRecorder.record();

        setState('recording');

        if (!config.disableLogs) {
            console.log('Initialized recorderType:', mediaRecorder.constructor.name, 'for output-type:', config.type);
        }
    }

    function stopRecording(callback) {
        callback = callback || function() {};

        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state === 'paused') {
            self.resumeRecording();

            setTimeout(function() {
                stopRecording(callback);
            }, 1);
            return;
        }

        if (self.state !== 'recording' && !config.disableLogs) {
            console.warn('Recording state should be: "recording", however current state is: ', self.state);
        }

        if (!config.disableLogs) {
            console.log('Stopped recording ' + config.type + ' stream.');
        }

        if (config.type !== 'gif') {
            mediaRecorder.stop(_callback);
        } else {
            mediaRecorder.stop();
            _callback();
        }

        setState('stopped');

        function _callback(__blob) {
            if (!mediaRecorder) {
                if (typeof callback.call === 'function') {
                    callback.call(self, '');
                } else {
                    callback('');
                }
                return;
            }

            Object.keys(mediaRecorder).forEach(function(key) {
                if (typeof mediaRecorder[key] === 'function') {
                    return;
                }

                self[key] = mediaRecorder[key];
            });

            var blob = mediaRecorder.blob;

            if (!blob) {
                if (__blob) {
                    mediaRecorder.blob = blob = __blob;
                } else {
                    throw 'Recording failed.';
                }
            }

            if (blob && !config.disableLogs) {
                console.log(blob.type, '->', bytesToSize(blob.size));
            }

            if (callback) {
                var url;

                try {
                    url = URL.createObjectURL(blob);
                } catch (e) {}

                if (typeof callback.call === 'function') {
                    callback.call(self, url);
                } else {
                    callback(url);
                }
            }

            if (!config.autoWriteToDisk) {
                return;
            }

            getDataURL(function(dataURL) {
                var parameter = {};
                parameter[config.type + 'Blob'] = dataURL;
                DiskStorage.Store(parameter);
            });
        }
    }

    function pauseRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'recording') {
            if (!config.disableLogs) {
                console.warn('Unable to pause the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('paused');

        mediaRecorder.pause();

        if (!config.disableLogs) {
            console.log('Paused recording.');
        }
    }

    function resumeRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'paused') {
            if (!config.disableLogs) {
                console.warn('Unable to resume the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('recording');

        // not all libs have this method yet
        mediaRecorder.resume();

        if (!config.disableLogs) {
            console.log('Resumed recording.');
        }
    }

    function readFile(_blob) {
        postMessage(new FileReaderSync().readAsDataURL(_blob));
    }

    function getDataURL(callback, _mediaRecorder) {
        if (!callback) {
            throw 'Pass a callback function over getDataURL.';
        }

        var blob = _mediaRecorder ? _mediaRecorder.blob : (mediaRecorder || {}).blob;

        if (!blob) {
            if (!config.disableLogs) {
                console.warn('Blob encoder did not finish its job yet.');
            }

            setTimeout(function() {
                getDataURL(callback, _mediaRecorder);
            }, 1000);
            return;
        }

        if (typeof Worker !== 'undefined' && !navigator.mozGetUserMedia) {
            var webWorker = processInWebWorker(readFile);

            webWorker.onmessage = function(event) {
                callback(event.data);
            };

            webWorker.postMessage(blob);
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function(event) {
                callback(event.target.result);
            };
        }

        function processInWebWorker(_function) {
            try {
                var blob = URL.createObjectURL(new Blob([_function.toString(),
                    'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
                ], {
                    type: 'application/javascript'
                }));

                var worker = new Worker(blob);
                URL.revokeObjectURL(blob);
                return worker;
            } catch (e) {}
        }
    }

    function handleRecordingDuration(counter) {
        counter = counter || 0;

        if (self.state === 'paused') {
            setTimeout(function() {
                handleRecordingDuration(counter);
            }, 1000);
            return;
        }

        if (self.state === 'stopped') {
            return;
        }

        if (counter >= self.recordingDuration) {
            stopRecording(self.onRecordingStopped);
            return;
        }

        counter += 1000; // 1-second

        setTimeout(function() {
            handleRecordingDuration(counter);
        }, 1000);
    }

    function setState(state) {
        if (!self) {
            return;
        }

        self.state = state;

        if (typeof self.onStateChanged.call === 'function') {
            self.onStateChanged.call(self, state);
        } else {
            self.onStateChanged(state);
        }
    }

    var WARNING = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + config.type + ' recorder.';

    function warningLog() {
        if (config.disableLogs === true) {
            return;
        }

        console.warn(WARNING);
    }

    var mediaRecorder;

    var returnObject = {
        /**
         * This method starts the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var recorder = RecordRTC(mediaStream, {
         *     type: 'video'
         * });
         * recorder.startRecording();
         */
        startRecording: startRecording,

        /**
         * This method stops the recording. It is strongly recommended to get "blob" or "URI" inside the callback to make sure all recorders finished their job.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     // use either "this" or "recorder" object; both are identical
         *     video.src = this.toURL();
         *     var blob = this.getBlob();
         * });
         */
        stopRecording: stopRecording,

        /**
         * This method pauses the recording. You can resume recording using "resumeRecording" method.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Firefox is unable to pause the recording. Fix it.
         * @example
         * recorder.pauseRecording();  // pause the recording
         * recorder.resumeRecording(); // resume again
         */
        pauseRecording: pauseRecording,

        /**
         * This method resumes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.pauseRecording();  // first of all, pause the recording
         * recorder.resumeRecording(); // now resume it
         */
        resumeRecording: resumeRecording,

        /**
         * This method initializes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * recorder.initRecorder();
         */
        initRecorder: initRecorder,

        /**
         * Ask RecordRTC to auto-stop the recording after 5 minutes.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var fiveMinutes = 5 * 1000 * 60;
         * recorder.setRecordingDuration(fiveMinutes, function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         * 
         * // or otherwise
         * recorder.setRecordingDuration(fiveMinutes).onRecordingStopped(function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         */
        setRecordingDuration: function(recordingDuration, callback) {
            if (typeof recordingDuration === 'undefined') {
                throw 'recordingDuration is required.';
            }

            if (typeof recordingDuration !== 'number') {
                throw 'recordingDuration must be a number.';
            }

            self.recordingDuration = recordingDuration;
            self.onRecordingStopped = callback || function() {};

            return {
                onRecordingStopped: function(callback) {
                    self.onRecordingStopped = callback;
                }
            };
        },

        /**
         * This method can be used to clear/reset all the recorded data.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Figure out the difference between "reset" and "clearRecordedData" methods.
         * @example
         * recorder.clearRecordedData();
         */
        clearRecordedData: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            mediaRecorder.clearRecordedData();

            if (!config.disableLogs) {
                console.log('Cleared old recorded data.');
            }
        },

        /**
         * Get the recorded blob. Use this method inside the "stopRecording" callback.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.getBlob();
         *
         *     var file = new File([blob], 'filename.webm', {
         *         type: 'video/webm'
         *     });
         *
         *     var formData = new FormData();
         *     formData.append('file', file); // upload "File" object rather than a "Blob"
         *     uploadToServer(formData);
         * });
         * @returns {Blob} Returns recorded data as "Blob" object.
         */
        getBlob: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return mediaRecorder.blob;
        },

        /**
         * Get data-URI instead of Blob.
         * @param {function} callback - Callback to get the Data-URI.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     recorder.getDataURL(function(dataURI) {
         *         video.src = dataURI;
         *     });
         * });
         */
        getDataURL: getDataURL,

        /**
         * Get virtual/temporary URL. Usage of this URL is limited to current tab.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     video.src = this.toURL();
         * });
         * @returns {String} Returns a virtual/temporary URL for the recorded "Blob".
         */
        toURL: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return URL.createObjectURL(mediaRecorder.blob);
        },

        /**
         * Get internal recording object (i.e. internal module) e.g. MutliStreamRecorder, MediaStreamRecorder, StereoAudioRecorder or WhammyRecorder etc.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var internal = recorder.getInternalRecorder();
         * if(internal instanceof MultiStreamRecorder) {
         *     internal.addStreams([newAudioStream]);
         *     internal.resetVideoStreams([screenStream]);
         * }
         * @returns {Object} Returns internal recording object.
         */
        getInternalRecorder: function() {
            return mediaRecorder;
        },

        /**
         * Invoke save-as dialog to save the recorded blob into your disk.
         * @param {string} fileName - Set your own file name.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     this.save('file-name');
         *
         *     // or manually:
         *     invokeSaveAsDialog(this.getBlob(), 'filename.webm');
         * });
         */
        save: function(fileName) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            invokeSaveAsDialog(mediaRecorder.blob, fileName);
        },

        /**
         * This method gets a blob from indexed-DB storage.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.getFromDisk(function(dataURL) {
         *     video.src = dataURL;
         * });
         */
        getFromDisk: function(callback) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            RecordRTC.getFromDisk(config.type, callback);
        },

        /**
         * This method appends an array of webp images to the recorded video-blob. It takes an "array" object.
         * @type {Array.<Array>}
         * @param {Array} arrayOfWebPImages - Array of webp images.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * var arrayOfWebPImages = [];
         * arrayOfWebPImages.push({
         *     duration: index,
         *     image: 'data:image/webp;base64,...'
         * });
         * recorder.setAdvertisementArray(arrayOfWebPImages);
         */
        setAdvertisementArray: function(arrayOfWebPImages) {
            config.advertisement = [];

            var length = arrayOfWebPImages.length;
            for (var i = 0; i < length; i++) {
                config.advertisement.push({
                    duration: i,
                    image: arrayOfWebPImages[i]
                });
            }
        },

        /**
         * It is equivalent to <code class="str">"recorder.getBlob()"</code> method. Usage of "getBlob" is recommended, though.
         * @property {Blob} blob - Recorded Blob can be accessed using this property.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.blob;
         *
         *     // below one is recommended
         *     var blob = this.getBlob();
         * });
         */
        blob: null,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} bufferSize - Buffer-size used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used this buffer-size: ' + this.bufferSize);
         * });
         */
        bufferSize: 0,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} sampleRate - Sample-rates used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used these sample-rates: ' + this.sampleRate);
         * });
         */
        sampleRate: 0,

        /**
         * {recorderType:StereoAudioRecorder} returns ArrayBuffer object.
         * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var arrayBuffer = this.buffer;
         *     alert(arrayBuffer.byteLength);
         * });
         */
        buffer: null,

        /**
         * This method resets the recorder. So that you can reuse single recorder instance many times.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.reset();
         * recorder.startRecording();
         */
        reset: function() {
            if (mediaRecorder && typeof mediaRecorder.clearRecordedData === 'function') {
                mediaRecorder.clearRecordedData();
            }
            mediaRecorder = null;
            setState('inactive');
            self.blob = null;
        },

        /**
         * This method is called whenever recorder's state changes. Use this as an "event".
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.onStateChanged = function(state) {
         *     console.log('Recorder state: ', state);
         * };
         */
        onStateChanged: function(state) {
            if (!config.disableLogs) {
                console.log('Recorder state changed:', state);
            }
        },

        /**
         * A recorder can have inactive, recording, paused or stopped states.
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * // this looper function will keep you updated about the recorder's states.
         * (function looper() {
         *     document.querySelector('h1').innerHTML = 'Recorder\'s state is: ' + recorder.state;
         *     if(recorder.state === 'stopped') return; // ignore+stop
         *     setTimeout(looper, 1000); // update after every 3-seconds
         * })();
         * recorder.startRecording();
         */
        state: 'inactive',

        /**
         * Get recorder's readonly state.
         * @method
         * @memberof RecordRTC
         * @example
         * var state = recorder.getState();
         * @returns {String} Returns recording state.
         */
        getState: function() {
            return self.state;
        },

        /**
         * Destroy RecordRTC instance. Clear all recorders and objects.
         * @method
         * @memberof RecordRTC
         * @example
         * recorder.destroy();
         */
        destroy: function() {
            var disableLogsCache = config.disableLogs;

            config = {
                disableLogs: true
            };
            self.reset();
            setState('destroyed');
            returnObject = self = null;

            if (Storage.AudioContextConstructor) {
                Storage.AudioContextConstructor.close();
                Storage.AudioContextConstructor = null;
            }

            config.disableLogs = disableLogsCache;

            if (!config.disableLogs) {
                console.warn('RecordRTC is destroyed.');
            }
        },

        /**
         * RecordRTC version number
         * @property {String} version - Release version number.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * alert(recorder.version);
         */
        version: '5.5.5'
    };

    if (!this) {
        self = returnObject;
        return returnObject;
    }

    // if someone wants to use RecordRTC with the "new" keyword.
    for (var prop in returnObject) {
        this[prop] = returnObject[prop];
    }

    self = this;

    return returnObject;
}

RecordRTC.version = '5.5.5';

if (typeof module !== 'undefined' /* && !!module.exports*/ ) {
    module.exports = RecordRTC;
}

if (typeof define === 'function' && define.amd) {
    define('RecordRTC', [], function() {
        return RecordRTC;
    });
}

RecordRTC.getFromDisk = function(type, callback) {
    if (!callback) {
        throw 'callback is mandatory.';
    }

    console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
    DiskStorage.Fetch(function(dataURL, _type) {
        if (type !== 'all' && _type === type + 'Blob' && callback) {
            callback(dataURL);
        }

        if (type === 'all' && callback) {
            callback(dataURL, _type.replace('Blob', ''));
        }
    });
};

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof RecordRTC
 * @example
 * RecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
RecordRTC.writeToDisk = function(options) {
    console.log('Writing recorded blob(s) to disk!');
    options = options || {};
    if (options.audio && options.video && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                options.gif.getDataURL(function(gifDataURL) {
                    DiskStorage.Store({
                        audioBlob: audioDataURL,
                        videoBlob: videoDataURL,
                        gifBlob: gifDataURL
                    });
                });
            });
        });
    } else if (options.audio && options.video) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    videoBlob: videoDataURL
                });
            });
        });
    } else if (options.audio && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.video && options.gif) {
        options.video.getDataURL(function(videoDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    videoBlob: videoDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.audio) {
        options.audio.getDataURL(function(audioDataURL) {
            DiskStorage.Store({
                audioBlob: audioDataURL
            });
        });
    } else if (options.video) {
        options.video.getDataURL(function(videoDataURL) {
            DiskStorage.Store({
                videoBlob: videoDataURL
            });
        });
    } else if (options.gif) {
        options.gif.getDataURL(function(gifDataURL) {
            DiskStorage.Store({
                gifBlob: gifDataURL
            });
        });
    }
};

// __________________________
// RecordRTC-Configuration.js

/**
 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCConfiguration
 * @class
 * @example
 * var options = RecordRTCConfiguration(mediaStream, options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, getNativeBlob:true, etc.}
 */

function RecordRTCConfiguration(mediaStream, config) {
    if (!config.recorderType && !config.type) {
        if (!!config.audio && !!config.video) {
            config.type = 'video';
        } else if (!!config.audio && !config.video) {
            config.type = 'audio';
        }
    }

    if (config.recorderType && !config.type) {
        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder || (typeof WebAssemblyRecorder !== 'undefined' && config.recorderType === WebAssemblyRecorder)) {
            config.type = 'video';
        } else if (config.recorderType === GifRecorder) {
            config.type = 'gif';
        } else if (config.recorderType === StereoAudioRecorder) {
            config.type = 'audio';
        } else if (config.recorderType === MediaStreamRecorder) {
            if (getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (!getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (getTracks(mediaStream, 'audio').length && !getTracks(mediaStream, 'video').length) {
                config.type = 'audio';
            } else {
                // config.type = 'UnKnown';
            }
        }
    }

    if (typeof MediaStreamRecorder !== 'undefined' && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (!config.mimeType) {
            config.mimeType = 'video/webm';
        }

        if (!config.type) {
            config.type = config.mimeType.split('/')[0];
        }

        if (!config.bitsPerSecond) {
            // config.bitsPerSecond = 128000;
        }
    }

    // consider default type=audio
    if (!config.type) {
        if (config.mimeType) {
            config.type = config.mimeType.split('/')[0];
        }
        if (!config.type) {
            config.type = 'audio';
        }
    }

    return config;
}

// __________________
// GetRecorderType.js

/**
 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
 * @summary It returns best recorder-type available for your browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef GetRecorderType
 * @class
 * @example
 * var RecorderType = GetRecorderType(options);
 * var recorder = new RecorderType(options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 */

function GetRecorderType(mediaStream, config) {
    var recorder;

    // StereoAudioRecorder can work with all three: Edge, Firefox and Chrome
    // todo: detect if it is Edge, then auto use: StereoAudioRecorder
    if (isChrome || isEdge || isOpera) {
        // Media Stream Recording API has not been implemented in chrome yet;
        // That's why using WebAudio API to record stereo audio in WAV format
        recorder = StereoAudioRecorder;
    }

    if (typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype && !isChrome) {
        recorder = MediaStreamRecorder;
    }

    // video recorder (in WebM format)
    if (config.type === 'video' && (isChrome || isOpera)) {
        recorder = WhammyRecorder;

        if (typeof WebAssemblyRecorder !== 'undefined' && typeof ReadableStream !== 'undefined') {
            recorder = WebAssemblyRecorder;
        }
    }

    // video recorder (in Gif format)
    if (config.type === 'gif') {
        recorder = GifRecorder;
    }

    // html2canvas recording!
    if (config.type === 'canvas') {
        recorder = CanvasRecorder;
    }

    if (isMediaRecorderCompatible() && recorder !== CanvasRecorder && recorder !== GifRecorder && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (getTracks(mediaStream, 'video').length || getTracks(mediaStream, 'audio').length) {
            // audio-only recording
            if (config.type === 'audio') {
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('audio/webm')) {
                    recorder = MediaStreamRecorder;
                }
                // else recorder = StereoAudioRecorder;
            } else {
                // video or screen tracks
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('video/webm')) {
                    recorder = MediaStreamRecorder;
                }
            }
        }
    }

    if (mediaStream instanceof Array && mediaStream.length) {
        recorder = MultiStreamRecorder;
    }

    if (config.recorderType) {
        recorder = config.recorderType;
    }

    if (!config.disableLogs && !!recorder && !!recorder.name) {
        console.log('Using recorderType:', recorder.name || recorder.constructor.name);
    }

    if (!recorder && isSafari) {
        recorder = MediaStreamRecorder;
    }

    return recorder;
}

// _____________
// MRecordRTC.js

/**
 * MRecordRTC runs on top of {@link RecordRTC} to bring multiple recordings in a single place, by providing simple API.
 * @summary MRecordRTC stands for "Multiple-RecordRTC".
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef MRecordRTC
 * @class
 * @example
 * var recorder = new MRecordRTC();
 * recorder.addStream(MediaStream);
 * recorder.mediaType = {
 *     audio: true, // or StereoAudioRecorder or MediaStreamRecorder
 *     video: true, // or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
 *     gif: true    // or GifRecorder
 * };
 * // mimeType is optional and should be set only in advance cases.
 * recorder.mimeType = {
 *     audio: 'audio/wav',
 *     video: 'video/webm',
 *     gif:   'image/gif'
 * };
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @requires {@link RecordRTC}
 */

function MRecordRTC(mediaStream) {

    /**
     * This method attaches MediaStream object to {@link MRecordRTC}.
     * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.addStream(MediaStream);
     */
    this.addStream = function(_mediaStream) {
        if (_mediaStream) {
            mediaStream = _mediaStream;
        }
    };

    /**
     * This property can be used to set the recording type e.g. audio, or video, or gif, or canvas.
     * @property {object} mediaType - {audio: true, video: true, gif: true}
     * @memberof MRecordRTC
     * @example
     * var recorder = new MRecordRTC();
     * recorder.mediaType = {
     *     audio: true, // TRUE or StereoAudioRecorder or MediaStreamRecorder
     *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
     *     gif  : true  // TRUE or GifRecorder
     * };
     */
    this.mediaType = {
        audio: true,
        video: true
    };

    /**
     * This method starts recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.startRecording();
     */
    this.startRecording = function() {
        var mediaType = this.mediaType;
        var recorderType;
        var mimeType = this.mimeType || {
            audio: null,
            video: null,
            gif: null
        };

        if (typeof mediaType.audio !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'audio').length) {
            mediaType.audio = false;
        }

        if (typeof mediaType.video !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
            mediaType.video = false;
        }

        if (typeof mediaType.gif !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
            mediaType.gif = false;
        }

        if (!mediaType.audio && !mediaType.video && !mediaType.gif) {
            throw 'MediaStream must have either audio or video tracks.';
        }

        if (!!mediaType.audio) {
            recorderType = null;
            if (typeof mediaType.audio === 'function') {
                recorderType = mediaType.audio;
            }

            this.audioRecorder = new RecordRTC(mediaStream, {
                type: 'audio',
                bufferSize: this.bufferSize,
                sampleRate: this.sampleRate,
                numberOfAudioChannels: this.numberOfAudioChannels || 2,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.audio,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp
            });

            if (!mediaType.video) {
                this.audioRecorder.startRecording();
            }
        }

        if (!!mediaType.video) {
            recorderType = null;
            if (typeof mediaType.video === 'function') {
                recorderType = mediaType.video;
            }

            var newStream = mediaStream;

            if (isMediaRecorderCompatible() && !!mediaType.audio && typeof mediaType.audio === 'function') {
                var videoTrack = getTracks(mediaStream, 'video')[0];

                if (isFirefox) {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);

                    if (recorderType && recorderType === WhammyRecorder) {
                        // Firefox does NOT supports webp-encoding yet
                        // But Firefox do supports WebAssemblyRecorder
                        recorderType = MediaStreamRecorder;
                    }
                } else {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);
                }
            }

            this.videoRecorder = new RecordRTC(newStream, {
                type: 'video',
                video: this.video,
                canvas: this.canvas,
                frameInterval: this.frameInterval || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.video,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp,
                workerPath: this.workerPath,
                webAssemblyPath: this.webAssemblyPath,
                frameRate: this.frameRate, // used by WebAssemblyRecorder; values: usually 30; accepts any.
                bitrate: this.bitrate // used by WebAssemblyRecorder; values: 0 to 1000+
            });

            if (!mediaType.audio) {
                this.videoRecorder.startRecording();
            }
        }

        if (!!mediaType.audio && !!mediaType.video) {
            var self = this;

            var isSingleRecorder = isMediaRecorderCompatible() === true;

            if (mediaType.audio instanceof StereoAudioRecorder && !!mediaType.video) {
                isSingleRecorder = false;
            } else if (mediaType.audio !== true && mediaType.video !== true && mediaType.audio !== mediaType.video) {
                isSingleRecorder = false;
            }

            if (isSingleRecorder === true) {
                self.audioRecorder = null;
                self.videoRecorder.startRecording();
            } else {
                self.videoRecorder.initRecorder(function() {
                    self.audioRecorder.initRecorder(function() {
                        // Both recorders are ready to record things accurately
                        self.videoRecorder.startRecording();
                        self.audioRecorder.startRecording();
                    });
                });
            }
        }

        if (!!mediaType.gif) {
            recorderType = null;
            if (typeof mediaType.gif === 'function') {
                recorderType = mediaType.gif;
            }
            this.gifRecorder = new RecordRTC(mediaStream, {
                type: 'gif',
                frameRate: this.frameRate || 200,
                quality: this.quality || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.gif
            });
            this.gifRecorder.startRecording();
        }
    };

    /**
     * This method stops recording.
     * @param {function} callback - Callback function is invoked when all encoders finished their jobs.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.stopRecording(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     */
    this.stopRecording = function(callback) {
        callback = callback || function() {};

        if (this.audioRecorder) {
            this.audioRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'audio');
            });
        }

        if (this.videoRecorder) {
            this.videoRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'video');
            });
        }

        if (this.gifRecorder) {
            this.gifRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'gif');
            });
        }
    };

    /**
     * This method pauses recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.pauseRecording();
     */
    this.pauseRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.pauseRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.pauseRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.pauseRecording();
        }
    };

    /**
     * This method resumes recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.resumeRecording();
     */
    this.resumeRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.resumeRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.resumeRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.resumeRecording();
        }
    };

    /**
     * This method can be used to manually get all recorded blobs.
     * @param {function} callback - All recorded blobs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getBlob(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     * // or
     * var audioBlob = recorder.getBlob().audio;
     * var videoBlob = recorder.getBlob().video;
     */
    this.getBlob = function(callback) {
        var output = {};

        if (this.audioRecorder) {
            output.audio = this.audioRecorder.getBlob();
        }

        if (this.videoRecorder) {
            output.video = this.videoRecorder.getBlob();
        }

        if (this.gifRecorder) {
            output.gif = this.gifRecorder.getBlob();
        }

        if (callback) {
            callback(output);
        }

        return output;
    };

    /**
     * Destroy all recorder instances.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.destroy();
     */
    this.destroy = function() {
        if (this.audioRecorder) {
            this.audioRecorder.destroy();
            this.audioRecorder = null;
        }

        if (this.videoRecorder) {
            this.videoRecorder.destroy();
            this.videoRecorder = null;
        }

        if (this.gifRecorder) {
            this.gifRecorder.destroy();
            this.gifRecorder = null;
        }
    };

    /**
     * This method can be used to manually get all recorded blobs' DataURLs.
     * @param {function} callback - All recorded blobs' DataURLs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getDataURL(function(recording){
     *     var audioDataURL = recording.audio;
     *     var videoDataURL = recording.video;
     *     var gifDataURL   = recording.gif;
     * });
     */
    this.getDataURL = function(callback) {
        this.getBlob(function(blob) {
            if (blob.audio && blob.video) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    getDataURL(blob.video, function(_videoDataURL) {
                        callback({
                            audio: _audioDataURL,
                            video: _videoDataURL
                        });
                    });
                });
            } else if (blob.audio) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    callback({
                        audio: _audioDataURL
                    });
                });
            } else if (blob.video) {
                getDataURL(blob.video, function(_videoDataURL) {
                    callback({
                        video: _videoDataURL
                    });
                });
            }
        });

        function getDataURL(blob, callback00) {
            if (typeof Worker !== 'undefined') {
                var webWorker = processInWebWorker(function readFile(_blob) {
                    postMessage(new FileReaderSync().readAsDataURL(_blob));
                });

                webWorker.onmessage = function(event) {
                    callback00(event.data);
                };

                webWorker.postMessage(blob);
            } else {
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function(event) {
                    callback00(event.target.result);
                };
            }
        }

        function processInWebWorker(_function) {
            var blob = URL.createObjectURL(new Blob([_function.toString(),
                'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
            ], {
                type: 'application/javascript'
            }));

            var worker = new Worker(blob);
            var url;
            if (typeof URL !== 'undefined') {
                url = URL;
            } else if (typeof webkitURL !== 'undefined') {
                url = webkitURL;
            } else {
                throw 'Neither URL nor webkitURL detected.';
            }
            url.revokeObjectURL(blob);
            return worker;
        }
    };

    /**
     * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.writeToDisk();
     */
    this.writeToDisk = function() {
        RecordRTC.writeToDisk({
            audio: this.audioRecorder,
            video: this.videoRecorder,
            gif: this.gifRecorder
        });
    };

    /**
     * This method can be used to invoke a save-as dialog for all recorded blobs.
     * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.save({
     *     audio: 'audio-file-name',
     *     video: 'video-file-name',
     *     gif  : 'gif-file-name'
     * });
     */
    this.save = function(args) {
        args = args || {
            audio: true,
            video: true,
            gif: true
        };

        if (!!args.audio && this.audioRecorder) {
            this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
        }

        if (!!args.video && this.videoRecorder) {
            this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
        }
        if (!!args.gif && this.gifRecorder) {
            this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
        }
    };
}

/**
 * This method can be used to get all recorded blobs from IndexedDB storage.
 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
 * @param {function} callback - Callback function to get all stored blobs.
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.getFromDisk('all', function(dataURL, type){
 *     if(type === 'audio') { }
 *     if(type === 'video') { }
 *     if(type === 'gif')   { }
 * });
 */
MRecordRTC.getFromDisk = RecordRTC.getFromDisk;

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
MRecordRTC.writeToDisk = RecordRTC.writeToDisk;

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MRecordRTC = MRecordRTC;
}

var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

(function(that) {
    if (!that) {
        return;
    }

    if (typeof window !== 'undefined') {
        return;
    }

    if (typeof global === 'undefined') {
        return;
    }

    global.navigator = {
        userAgent: browserFakeUserAgent,
        getUserMedia: function() {}
    };

    if (!global.console) {
        global.console = {};
    }

    if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
        global.console.error = global.console.log = global.console.log || function() {
            console.log(arguments);
        };
    }

    if (typeof document === 'undefined') {
        /*global document:true */
        that.document = {};

        document.createElement = document.captureStream = document.mozCaptureStream = function() {
            var obj = {
                getContext: function() {
                    return obj;
                },
                play: function() {},
                pause: function() {},
                drawImage: function() {},
                toDataURL: function() {
                    return '';
                }
            };
            return obj;
        };

        that.HTMLVideoElement = function() {};
    }

    if (typeof location === 'undefined') {
        /*global location:true */
        that.location = {
            protocol: 'file:',
            href: '',
            hash: ''
        };
    }

    if (typeof screen === 'undefined') {
        /*global screen:true */
        that.screen = {
            width: 0,
            height: 0
        };
    }

    if (typeof URL === 'undefined') {
        /*global screen:true */
        that.URL = {
            createObjectURL: function() {
                return '';
            },
            revokeObjectURL: function() {
                return '';
            }
        };
    }

    /*global window:true */
    that.window = global;
})(typeof global !== 'undefined' ? global : null);

// _____________________________
// Cross-Browser-Declarations.js

// animation-frame used in WebM recording

/*jshint -W079 */
var requestAnimationFrame = window.requestAnimationFrame;
if (typeof requestAnimationFrame === 'undefined') {
    if (typeof webkitRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = webkitRequestAnimationFrame;
    } else if (typeof mozRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = mozRequestAnimationFrame;
    } else if (typeof msRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = msRequestAnimationFrame;
    } else if (typeof requestAnimationFrame === 'undefined') {
        // via: https://gist.github.com/paulirish/1579671
        var lastTime = 0;

        /*global requestAnimationFrame:true */
        requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
}

/*jshint -W079 */
var cancelAnimationFrame = window.cancelAnimationFrame;
if (typeof cancelAnimationFrame === 'undefined') {
    if (typeof webkitCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = webkitCancelAnimationFrame;
    } else if (typeof mozCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = mozCancelAnimationFrame;
    } else if (typeof msCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = msCancelAnimationFrame;
    } else if (typeof cancelAnimationFrame === 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}

// WebAudio API representer
var AudioContext = window.AudioContext;

if (typeof AudioContext === 'undefined') {
    if (typeof webkitAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = webkitAudioContext;
    }

    if (typeof mozAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = mozAudioContext;
    }
}

/*jshint -W079 */
var URL = window.URL;

if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
    /*global URL:true */
    URL = webkitURL;
}

if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
    if (typeof navigator.webkitGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.webkitGetUserMedia;
    }

    if (typeof navigator.mozGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.mozGetUserMedia;
    }
}

var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') !== -1;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && ('netscape' in window) && / rv:/.test(navigator.userAgent);
var isChrome = (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) || isElectron() || navigator.userAgent.toLowerCase().indexOf('chrome/') !== -1;

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari && !isChrome && navigator.userAgent.indexOf('CriOS') !== -1) {
    isSafari = false;
    isChrome = true;
}

var MediaStream = window.MediaStream;

if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
    MediaStream = webkitMediaStream;
}

/*global MediaStream:true */
if (typeof MediaStream !== 'undefined') {
    // override "stop" method for all browsers
    if (typeof MediaStream.prototype.stop === 'undefined') {
        MediaStream.prototype.stop = function() {
            this.getTracks().forEach(function(track) {
                track.stop();
            });
        };
    }
}

// below function via: http://goo.gl/B3ae8c
/**
 * Return human-readable file size.
 * @param {number} bytes - Pass bytes and get formatted string.
 * @returns {string} - formatted string
 * @example
 * bytesToSize(1024*1024*5) === '5 GB'
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return '0 Bytes';
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

/**
 * @param {Blob} file - File or Blob object. This parameter is required.
 * @param {string} fileName - Optional file name e.g. "Recorded-Video.webm"
 * @example
 * invokeSaveAsDialog(blob or file, [optional] fileName);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function invokeSaveAsDialog(file, fileName) {
    if (!file) {
        throw 'Blob object is required.';
    }

    if (!file.type) {
        try {
            file.type = 'video/webm';
        } catch (e) {}
    }

    var fileExtension = (file.type || 'video/webm').split('/')[1];

    if (fileName && fileName.indexOf('.') !== -1) {
        var splitted = fileName.split('.');
        fileName = splitted[0];
        fileExtension = splitted[1];
    }

    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
    } else if (typeof navigator.msSaveBlob !== 'undefined') {
        return navigator.msSaveBlob(file, fileFullName);
    }

    var hyperlink = document.createElement('a');
    hyperlink.href = URL.createObjectURL(file);
    hyperlink.download = fileFullName;

    hyperlink.style = 'display:none;opacity:0;color:transparent;';
    (document.body || document.documentElement).appendChild(hyperlink);

    if (typeof hyperlink.click === 'function') {
        hyperlink.click();
    } else {
        hyperlink.target = '_blank';
        hyperlink.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }

    URL.revokeObjectURL(hyperlink.href);
}

/**
 * from: https://github.com/cheton/is-electron/blob/master/index.js
 **/
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

function getTracks(stream, kind) {
    if (!stream || !stream.getTracks) {
        return [];
    }

    return stream.getTracks().filter(function(t) {
        return t.kind === (kind || 'audio');
    });
}

function setSrcObject(stream, element) {
    if ('srcObject' in element) {
        element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
        element.mozSrcObject = stream;
    } else {
        element.srcObject = stream;
    }
}

/**
 * @param {Blob} file - File or Blob object.
 * @param {function} callback - Callback function.
 * @example
 * getSeekableBlob(blob or file, callback);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function getSeekableBlob(inputBlob, callback) {
    // EBML.js copyrights goes to: https://github.com/legokichi/ts-ebml
    if (typeof EBML === 'undefined') {
        throw new Error('Please link: https://cdn.webrtc-experiment.com/EBML.js');
    }

    var reader = new EBML.Reader();
    var decoder = new EBML.Decoder();
    var tools = EBML.tools;

    var fileReader = new FileReader();
    fileReader.onload = function(e) {
        var ebmlElms = decoder.decode(this.result);
        ebmlElms.forEach(function(element) {
            reader.read(element);
        });
        reader.stop();
        var refinedMetadataBuf = tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
        var body = this.result.slice(reader.metadataSize);
        var newBlob = new Blob([refinedMetadataBuf, body], {
            type: 'video/webm'
        });

        callback(newBlob);
    };
    fileReader.readAsArrayBuffer(inputBlob);
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.invokeSaveAsDialog = invokeSaveAsDialog;
    RecordRTC.getTracks = getTracks;
    RecordRTC.getSeekableBlob = getSeekableBlob;
    RecordRTC.bytesToSize = bytesToSize;
    RecordRTC.isElectron = isElectron;
}

// __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
// Storage.js

/**
 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @example
 * Storage.AudioContext === webkitAudioContext
 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Storage = {};

if (typeof AudioContext !== 'undefined') {
    Storage.AudioContext = AudioContext;
} else if (typeof webkitAudioContext !== 'undefined') {
    Storage.AudioContext = webkitAudioContext;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Storage = Storage;
}

function isMediaRecorderCompatible() {
    if (isFirefox || isSafari || isEdge) {
        return true;
    }

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    if (isChrome || isOpera) {
        verOffset = nAgt.indexOf('Chrome');
        fullVersion = nAgt.substring(verOffset + 7);
    }

    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(';')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    if ((ix = fullVersion.indexOf(' ')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    majorVersion = parseInt('' + fullVersion, 10);

    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    return majorVersion >= 49;
}

// ______________________
// MediaStreamRecorder.js

/**
 * MediaStreamRecorder is an abstraction layer for {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}. It is used by {@link RecordRTC} to record MediaStream(s) in both Chrome and Firefox.
 * @summary Runs top over {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link https://github.com/muaz-khan|Muaz Khan}
 * @typedef MediaStreamRecorder
 * @class
 * @example
 * var config = {
 *     mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
 *     audioBitsPerSecond : 256 * 8 * 1024,
 *     videoBitsPerSecond : 256 * 8 * 1024,
 *     bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
 *     checkForInactiveTracks: true,
 *     timeSlice: 1000, // concatenate intervals based blobs
 *     ondataavailable: function() {} // get intervals based blobs
 * }
 * var recorder = new MediaStreamRecorder(mediaStream, config);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", timeSlice: 1000}
 * @throws Will throw an error if first argument "MediaStream" is missing. Also throws error if "MediaRecorder API" are not supported by the browser.
 */

function MediaStreamRecorder(mediaStream, config) {
    var self = this;

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    if (typeof MediaRecorder === 'undefined') {
        throw 'Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.';
    }

    config = config || {
        // bitsPerSecond: 256 * 8 * 1024,
        mimeType: 'video/webm'
    };

    if (config.type === 'audio') {
        if (getTracks(mediaStream, 'video').length && getTracks(mediaStream, 'audio').length) {
            var stream;
            if (!!navigator.mozGetUserMedia) {
                stream = new MediaStream();
                stream.addTrack(getTracks(mediaStream, 'audio')[0]);
            } else {
                // webkitMediaStream
                stream = new MediaStream(getTracks(mediaStream, 'audio'));
            }
            mediaStream = stream;
        }

        if (!config.mimeType || config.mimeType.toString().toLowerCase().indexOf('audio') === -1) {
            config.mimeType = isChrome ? 'audio/webm' : 'audio/ogg';
        }

        if (config.mimeType && config.mimeType.toString().toLowerCase() !== 'audio/ogg' && !!navigator.mozGetUserMedia) {
            // forcing better codecs on Firefox (via #166)
            config.mimeType = 'audio/ogg';
        }
    }

    var arrayOfBlobs = [];

    /**
     * This method returns array of blobs. Use only with "timeSlice". Its useful to preview recording anytime, without using the "stop" method.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var arrayOfBlobs = recorder.getArrayOfBlobs();
     * @returns {Array} Returns array of recorded blobs.
     */
    this.getArrayOfBlobs = function() {
        return arrayOfBlobs;
    };

    /**
     * This method records MediaStream.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // set defaults
        self.blob = null;
        self.clearRecordedData();
        self.timestamps = [];
        allStates = [];
        arrayOfBlobs = [];

        var recorderHints = config;

        if (!config.disableLogs) {
            console.log('Passing following config over MediaRecorder API.', recorderHints);
        }

        if (mediaRecorder) {
            // mandatory to make sure Firefox doesn't fails to record streams 3-4 times without reloading the page.
            mediaRecorder = null;
        }

        if (isChrome && !isMediaRecorderCompatible()) {
            // to support video-only recording on stable
            recorderHints = 'video/vp8';
        }

        if (typeof MediaRecorder.isTypeSupported === 'function' && recorderHints.mimeType) {
            if (!MediaRecorder.isTypeSupported(recorderHints.mimeType)) {
                if (!config.disableLogs) {
                    console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
                }

                recorderHints.mimeType = config.type === 'audio' ? 'audio/webm' : 'video/webm';
            }
        }

        // using MediaRecorder API here
        try {
            mediaRecorder = new MediaRecorder(mediaStream, recorderHints);

            // reset
            config.mimeType = recorderHints.mimeType;
        } catch (e) {
            // chrome-based fallback
            mediaRecorder = new MediaRecorder(mediaStream);
        }

        // old hack?
        if (recorderHints.mimeType && !MediaRecorder.isTypeSupported && 'canRecordMimeType' in mediaRecorder && mediaRecorder.canRecordMimeType(recorderHints.mimeType) === false) {
            if (!config.disableLogs) {
                console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
            }
        }

        // Dispatching OnDataAvailable Handler
        mediaRecorder.ondataavailable = function(e) {
            if (e.data) {
                allStates.push('ondataavailable: ' + bytesToSize(e.data.size));
            }

            if (typeof config.timeSlice === 'number') {
                if (e.data && e.data.size && e.data.size > 100) {
                    arrayOfBlobs.push(e.data);
                    updateTimeStamp();

                    if (typeof config.ondataavailable === 'function') {
                        // intervals based blobs
                        var blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                            type: getMimeType(recorderHints)
                        });
                        config.ondataavailable(blob);
                    }
                }
                return;
            }

            if (!e.data || !e.data.size || e.data.size < 100 || self.blob) {
                // make sure that stopRecording always getting fired
                // even if there is invalid data
                if (self.recordingCallback) {
                    self.recordingCallback(new Blob([], {
                        type: getMimeType(recorderHints)
                    }));
                    self.recordingCallback = null;
                }
                return;
            }

            self.blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                type: getMimeType(recorderHints)
            });

            if (self.recordingCallback) {
                self.recordingCallback(self.blob);
                self.recordingCallback = null;
            }
        };

        mediaRecorder.onstart = function() {
            allStates.push('started');
        };

        mediaRecorder.onpause = function() {
            allStates.push('paused');
        };

        mediaRecorder.onresume = function() {
            allStates.push('resumed');
        };

        mediaRecorder.onstop = function() {
            allStates.push('stopped');
        };

        mediaRecorder.onerror = function(error) {
            if (!error) {
                return;
            }

            if (!error.name) {
                error.name = 'UnknownError';
            }

            allStates.push('error: ' + error);

            if (!config.disableLogs) {
                // via: https://w3c.github.io/mediacapture-record/MediaRecorder.html#exception-summary
                if (error.name.toString().toLowerCase().indexOf('invalidstate') !== -1) {
                    console.error('The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.', error);
                } else if (error.name.toString().toLowerCase().indexOf('notsupported') !== -1) {
                    console.error('MIME type (', recorderHints.mimeType, ') is not supported.', error);
                } else if (error.name.toString().toLowerCase().indexOf('security') !== -1) {
                    console.error('MediaRecorder security error', error);
                }

                // older code below
                else if (error.name === 'OutOfMemory') {
                    console.error('The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'IllegalStreamModification') {
                    console.error('A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'OtherRecordingError') {
                    console.error('Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'GenericError') {
                    console.error('The UA cannot provide the codec or recording option that has been requested.', error);
                } else {
                    console.error('MediaRecorder Error', error);
                }
            }

            (function(looper) {
                if (!self.manuallyStopped && mediaRecorder && mediaRecorder.state === 'inactive') {
                    delete config.timeslice;

                    // 10 minutes, enough?
                    mediaRecorder.start(10 * 60 * 1000);
                    return;
                }

                setTimeout(looper, 1000);
            })();

            if (mediaRecorder.state !== 'inactive' && mediaRecorder.state !== 'stopped') {
                mediaRecorder.stop();
            }
        };

        if (typeof config.timeSlice === 'number') {
            updateTimeStamp();
            mediaRecorder.start(config.timeSlice);
        } else {
            // default is 60 minutes; enough?
            // use config => {timeSlice: 1000} otherwise

            mediaRecorder.start(3.6e+6);
        }

        if (config.initCallback) {
            config.initCallback(); // old code
        }
    };

    /**
     * @property {Array} timestamps - Array of time stamps
     * @memberof MediaStreamRecorder
     * @example
     * console.log(recorder.timestamps);
     */
    this.timestamps = [];

    function updateTimeStamp() {
        self.timestamps.push(new Date().getTime());

        if (typeof config.onTimeStamp === 'function') {
            config.onTimeStamp(self.timestamps[self.timestamps.length - 1], self.timestamps);
        }
    }

    function getMimeType(secondObject) {
        if (mediaRecorder && mediaRecorder.mimeType) {
            return mediaRecorder.mimeType;
        }

        return secondObject.mimeType || 'video/webm';
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        self.manuallyStopped = true; // used inside the mediaRecorder.onerror

        if (!mediaRecorder) {
            return;
        }

        this.recordingCallback = callback;

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }

        if (typeof config.timeSlice === 'number') {
            setTimeout(function() {
                self.blob = new Blob(arrayOfBlobs, {
                    type: getMimeType(config)
                });

                self.recordingCallback(self.blob);
            }, 100);
        }
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'paused') {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            self.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        arrayOfBlobs = [];
        mediaRecorder = null;
        self.timestamps = [];
    }

    // Reference to "MediaRecorder" object
    var mediaRecorder;

    /**
     * Access to native MediaRecorder API
     * @method
     * @memberof MediaStreamRecorder
     * @instance
     * @example
     * var internal = recorder.getInternalRecorder();
     * internal.ondataavailable = function() {}; // override
     * internal.stream, internal.onpause, internal.onstop, etc.
     * @returns {Object} Returns internal recording object.
     */
    this.getInternalRecorder = function() {
        return mediaRecorder;
    };

    function isMediaStreamActive() {
        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function() {
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;


    /**
     * Get MediaRecorder readonly state.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getState();
     * @returns {String} Returns recording state.
     */
    this.getState = function() {
        if (!mediaRecorder) {
            return 'inactive';
        }

        return mediaRecorder.state || 'inactive';
    };

    // list of all recording states
    var allStates = [];

    /**
     * Get MediaRecorder all recording states.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getAllStates();
     * @returns {Array} Returns all recording states
     */
    this.getAllStates = function() {
        return allStates;
    };

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = false; // disable to minimize CPU usage
    }

    var self = this;

    // this method checks if media stream is stopped
    // or if any track is ended.
    (function looper() {
        if (!mediaRecorder || config.checkForInactiveTracks === false) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            self.stop();
            return;
        }

        setTimeout(looper, 1000); // check every second
    })();

    // for debugging
    this.name = 'MediaStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MediaStreamRecorder = MediaStreamRecorder;
}

// source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
// https://github.com/mattdiamond/Recorderjs#license-mit
// ______________________
// StereoAudioRecorder.js

/**
 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
 * @summary JavaScript standalone object for stereo audio recording.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef StereoAudioRecorder
 * @class
 * @example
 * var recorder = new StereoAudioRecorder(MediaStream, {
 *     sampleRate: 44100,
 *     bufferSize: 4096
 * });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
 */

function StereoAudioRecorder(mediaStream, config) {
    if (!getTracks(mediaStream, 'audio').length) {
        throw 'Your stream has no audio tracks.';
    }

    config = config || {};

    var self = this;

    // variables
    var leftchannel = [];
    var rightchannel = [];
    var recording = false;
    var recordingLength = 0;
    var jsAudioNode;

    var numberOfAudioChannels = 2;

    /**
     * Set sample rates such as 8K or 16K. Reference: http://stackoverflow.com/a/28977136/552182
     * @property {number} desiredSampRate - Desired Bits per sample * 1000
     * @memberof StereoAudioRecorder
     * @instance
     * @example
     * var recorder = StereoAudioRecorder(mediaStream, {
     *   desiredSampRate: 16 * 1000 // bits-per-sample * 1000
     * });
     */
    var desiredSampRate = config.desiredSampRate;

    // backward compatibility
    if (config.leftChannel === true) {
        numberOfAudioChannels = 1;
    }

    if (config.numberOfAudioChannels === 1) {
        numberOfAudioChannels = 1;
    }

    if (!numberOfAudioChannels || numberOfAudioChannels < 1) {
        numberOfAudioChannels = 2;
    }

    if (!config.disableLogs) {
        console.log('StereoAudioRecorder is set to record number of channels: ' + numberOfAudioChannels);
    }

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = true;
    }

    function isMediaStreamActive() {
        if (config.checkForInactiveTracks === false) {
            // always return "true"
            return true;
        }

        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * This method records MediaStream.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        resetVariables();

        isAudioProcessStarted = isPaused = false;
        recording = true;

        if (typeof config.timeSlice !== 'undefined') {
            looper();
        }
    };

    function mergeLeftRightBuffers(config, callback) {
        function mergeAudioBuffers(config, cb) {
            var numberOfAudioChannels = config.numberOfAudioChannels;

            // todo: "slice(0)" --- is it causes loop? Should be removed?
            var leftBuffers = config.leftBuffers.slice(0);
            var rightBuffers = config.rightBuffers.slice(0);
            var sampleRate = config.sampleRate;
            var internalInterleavedLength = config.internalInterleavedLength;
            var desiredSampRate = config.desiredSampRate;

            if (numberOfAudioChannels === 2) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
                rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                    rightBuffers = interpolateArray(rightBuffers, desiredSampRate, sampleRate);
                }
            }

            if (numberOfAudioChannels === 1) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                }
            }

            // set sample rate as desired sample rate
            if (desiredSampRate) {
                sampleRate = desiredSampRate;
            }

            // for changing the sampling rate, reference:
            // http://stackoverflow.com/a/28977136/552182
            function interpolateArray(data, newSampleRate, oldSampleRate) {
                var fitCount = Math.round(data.length * (newSampleRate / oldSampleRate));
                var newData = [];
                var springFactor = Number((data.length - 1) / (fitCount - 1));
                newData[0] = data[0];
                for (var i = 1; i < fitCount - 1; i++) {
                    var tmp = i * springFactor;
                    var before = Number(Math.floor(tmp)).toFixed();
                    var after = Number(Math.ceil(tmp)).toFixed();
                    var atPoint = tmp - before;
                    newData[i] = linearInterpolate(data[before], data[after], atPoint);
                }
                newData[fitCount - 1] = data[data.length - 1];
                return newData;
            }

            function linearInterpolate(before, after, atPoint) {
                return before + (after - before) * atPoint;
            }

            function mergeBuffers(channelBuffer, rLength) {
                var result = new Float64Array(rLength);
                var offset = 0;
                var lng = channelBuffer.length;

                for (var i = 0; i < lng; i++) {
                    var buffer = channelBuffer[i];
                    result.set(buffer, offset);
                    offset += buffer.length;
                }

                return result;
            }

            function interleave(leftChannel, rightChannel) {
                var length = leftChannel.length + rightChannel.length;

                var result = new Float64Array(length);

                var inputIndex = 0;

                for (var index = 0; index < length;) {
                    result[index++] = leftChannel[inputIndex];
                    result[index++] = rightChannel[inputIndex];
                    inputIndex++;
                }
                return result;
            }

            function writeUTFBytes(view, offset, string) {
                var lng = string.length;
                for (var i = 0; i < lng; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }

            // interleave both channels together
            var interleaved;

            if (numberOfAudioChannels === 2) {
                interleaved = interleave(leftBuffers, rightBuffers);
            }

            if (numberOfAudioChannels === 1) {
                interleaved = leftBuffers;
            }

            var interleavedLength = interleaved.length;

            // create wav file
            var resultingBufferLength = 44 + interleavedLength * 2;

            var buffer = new ArrayBuffer(resultingBufferLength);

            var view = new DataView(buffer);

            // RIFF chunk descriptor/identifier 
            writeUTFBytes(view, 0, 'RIFF');

            // RIFF chunk length
            // changed "44" to "36" via #401
            view.setUint32(4, 36 + interleavedLength * 2, true);

            // RIFF type 
            writeUTFBytes(view, 8, 'WAVE');

            // format chunk identifier 
            // FMT sub-chunk
            writeUTFBytes(view, 12, 'fmt ');

            // format chunk length 
            view.setUint32(16, 16, true);

            // sample format (raw)
            view.setUint16(20, 1, true);

            // stereo (2 channels)
            view.setUint16(22, numberOfAudioChannels, true);

            // sample rate 
            view.setUint32(24, sampleRate, true);

            // byte rate (sample rate * block align)
            view.setUint32(28, sampleRate * 2, true);

            // block align (channel count * bytes per sample) 
            view.setUint16(32, numberOfAudioChannels * 2, true);

            // bits per sample 
            view.setUint16(34, 16, true);

            // data sub-chunk
            // data chunk identifier 
            writeUTFBytes(view, 36, 'data');

            // data chunk length 
            view.setUint32(40, interleavedLength * 2, true);

            // write the PCM samples
            var lng = interleavedLength;
            var index = 44;
            var volume = 1;
            for (var i = 0; i < lng; i++) {
                view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
                index += 2;
            }

            if (cb) {
                return cb({
                    buffer: buffer,
                    view: view
                });
            }

            postMessage({
                buffer: buffer,
                view: view
            });
        }

        if (config.noWorker) {
            mergeAudioBuffers(config, function(data) {
                callback(data.buffer, data.view);
            });
            return;
        }


        var webWorker = processInWebWorker(mergeAudioBuffers);

        webWorker.onmessage = function(event) {
            callback(event.data.buffer, event.data.view);

            // release memory
            URL.revokeObjectURL(webWorker.workerURL);

            // kill webworker (or Chrome will kill your page after ~25 calls)
            webWorker.terminate();
        };

        webWorker.postMessage(config);
    }

    function processInWebWorker(_function) {
        var workerURL = URL.createObjectURL(new Blob([_function.toString(),
            ';this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(workerURL);
        worker.workerURL = workerURL;
        return worker;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        // stop recording
        recording = false;

        mergeLeftRightBuffers({
            desiredSampRate: desiredSampRate,
            sampleRate: sampleRate,
            numberOfAudioChannels: numberOfAudioChannels,
            internalInterleavedLength: recordingLength,
            leftBuffers: leftchannel,
            rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel,
            noWorker: config.noWorker
        }, function(buffer, view) {
            /**
             * @property {Blob} blob - The recorded blob object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var blob = recorder.blob;
             * });
             */
            self.blob = new Blob([view], {
                type: 'audio/wav'
            });

            /**
             * @property {ArrayBuffer} buffer - The recorded buffer object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var buffer = recorder.buffer;
             * });
             */
            self.buffer = new ArrayBuffer(view.buffer.byteLength);

            /**
             * @property {DataView} view - The recorded data-view object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var view = recorder.view;
             * });
             */
            self.view = view;

            self.sampleRate = desiredSampRate || sampleRate;
            self.bufferSize = bufferSize;

            // recorded audio length
            self.length = recordingLength;

            isAudioProcessStarted = false;

            if (callback) {
                callback(self.blob);
            }
        });
    };

    if (typeof Storage === 'undefined') {
        var Storage = {
            AudioContextConstructor: null,
            AudioContext: window.AudioContext || window.webkitAudioContext
        };
    }

    if (!Storage.AudioContextConstructor) {
        Storage.AudioContextConstructor = new Storage.AudioContext();
    }

    var context = Storage.AudioContextConstructor;

    // creates an audio node from the microphone incoming stream
    var audioInput = context.createMediaStreamSource(mediaStream);

    var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];

    /**
     * From the spec: This value controls how frequently the audioprocess event is
     * dispatched and how many sample-frames need to be processed each call.
     * Lower values for buffer size will result in a lower (better) latency.
     * Higher values will be necessary to avoid audio breakup and glitches
     * The size of the buffer (in sample-frames) which needs to
     * be processed each time onprocessaudio is called.
     * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
     * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     bufferSize: 4096
     * });
     */

    // "0" means, let chrome decide the most accurate buffer-size for current platform.
    var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;

    if (legalBufferValues.indexOf(bufferSize) === -1) {
        if (!config.disableLogs) {
            console.log('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
        }
    }

    if (context.createJavaScriptNode) {
        jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else if (context.createScriptProcessor) {
        jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else {
        throw 'WebAudio API has no support on this browser.';
    }

    // connect the stream to the script processor
    audioInput.connect(jsAudioNode);

    if (!config.bufferSize) {
        bufferSize = jsAudioNode.bufferSize; // device buffer-size
    }

    /**
     * The sample rate (in sample-frames per second) at which the
     * AudioContext handles audio. It is assumed that all AudioNodes
     * in the context run at this rate. In making this assumption,
     * sample-rate converters or "varispeed" processors are not supported
     * in real-time processing.
     * The sampleRate parameter describes the sample-rate of the
     * linear PCM audio data in the buffer in sample-frames per second.
     * An implementation must support sample-rates in at least
     * the range 22050 to 96000.
     * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     sampleRate: 44100
     * });
     */
    var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;

    if (sampleRate < 22050 || sampleRate > 96000) {
        // Ref: http://stackoverflow.com/a/26303918/552182
        if (!config.disableLogs) {
            console.log('sample-rate must be under range 22050 and 96000.');
        }
    }

    if (!config.disableLogs) {
        if (config.desiredSampRate) {
            console.log('Desired sample-rate: ' + config.desiredSampRate);
        }
    }

    var isPaused = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        if (!recording) {
            if (!config.disableLogs) {
                console.log('Seems recording has been restarted.');
            }
            this.record();
            return;
        }

        isPaused = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        config.checkForInactiveTracks = false;

        if (recording) {
            this.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function resetVariables() {
        leftchannel = [];
        rightchannel = [];
        recordingLength = 0;
        isAudioProcessStarted = false;
        recording = false;
        isPaused = false;
        context = null;

        self.leftchannel = leftchannel;
        self.rightchannel = rightchannel;
        self.numberOfAudioChannels = numberOfAudioChannels;
        self.desiredSampRate = desiredSampRate;
        self.sampleRate = sampleRate;
        self.recordingLength = recordingLength;

        intervalsBasedBuffers = {
            left: [],
            right: [],
            recordingLength: 0
        };
    }

    function clearRecordedDataCB() {
        if (jsAudioNode) {
            jsAudioNode.onaudioprocess = null;
            jsAudioNode.disconnect();
            jsAudioNode = null;
        }

        if (audioInput) {
            audioInput.disconnect();
            audioInput = null;
        }

        resetVariables();
    }

    // for debugging
    this.name = 'StereoAudioRecorder';
    this.toString = function() {
        return this.name;
    };

    var isAudioProcessStarted = false;

    function onAudioProcessDataAvailable(e) {
        if (isPaused) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            jsAudioNode.disconnect();
            recording = false;
        }

        if (!recording) {
            if (audioInput) {
                audioInput.disconnect();
                audioInput = null;
            }
            return;
        }

        /**
         * This method is called on "onaudioprocess" event's first invocation.
         * @method {function} onAudioProcessStarted
         * @memberof StereoAudioRecorder
         * @example
         * recorder.onAudioProcessStarted: function() { };
         */
        if (!isAudioProcessStarted) {
            isAudioProcessStarted = true;
            if (config.onAudioProcessStarted) {
                config.onAudioProcessStarted();
            }

            if (config.initCallback) {
                config.initCallback();
            }
        }

        var left = e.inputBuffer.getChannelData(0);

        // we clone the samples
        var chLeft = new Float32Array(left);
        leftchannel.push(chLeft);

        if (numberOfAudioChannels === 2) {
            var right = e.inputBuffer.getChannelData(1);
            var chRight = new Float32Array(right);
            rightchannel.push(chRight);
        }

        recordingLength += bufferSize;

        // export raw PCM
        self.recordingLength = recordingLength;

        if (typeof config.timeSlice !== 'undefined') {
            intervalsBasedBuffers.recordingLength += bufferSize;
            intervalsBasedBuffers.left.push(chLeft);

            if (numberOfAudioChannels === 2) {
                intervalsBasedBuffers.right.push(chRight);
            }
        }
    }

    jsAudioNode.onaudioprocess = onAudioProcessDataAvailable;

    // to prevent self audio to be connected with speakers
    if (context.createMediaStreamDestination) {
        jsAudioNode.connect(context.createMediaStreamDestination());
    } else {
        jsAudioNode.connect(context.destination);
    }

    // export raw PCM
    this.leftchannel = leftchannel;
    this.rightchannel = rightchannel;
    this.numberOfAudioChannels = numberOfAudioChannels;
    this.desiredSampRate = desiredSampRate;
    this.sampleRate = sampleRate;
    self.recordingLength = recordingLength;

    // helper for intervals based blobs
    var intervalsBasedBuffers = {
        left: [],
        right: [],
        recordingLength: 0
    };

    // this looper is used to support intervals based blobs (via timeSlice+ondataavailable)
    function looper() {
        if (!recording || typeof config.ondataavailable !== 'function' || typeof config.timeSlice === 'undefined') {
            return;
        }

        if (intervalsBasedBuffers.left.length) {
            mergeLeftRightBuffers({
                desiredSampRate: desiredSampRate,
                sampleRate: sampleRate,
                numberOfAudioChannels: numberOfAudioChannels,
                internalInterleavedLength: intervalsBasedBuffers.recordingLength,
                leftBuffers: intervalsBasedBuffers.left,
                rightBuffers: numberOfAudioChannels === 1 ? [] : intervalsBasedBuffers.right
            }, function(buffer, view) {
                var blob = new Blob([view], {
                    type: 'audio/wav'
                });
                config.ondataavailable(blob);

                setTimeout(looper, config.timeSlice);
            });

            intervalsBasedBuffers = {
                left: [],
                right: [],
                recordingLength: 0
            };
        } else {
            setTimeout(looper, config.timeSlice);
        }
    }
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.StereoAudioRecorder = StereoAudioRecorder;
}

// _________________
// CanvasRecorder.js

/**
 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
 * @summary HTML2Canvas recording into video WebM.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef CanvasRecorder
 * @class
 * @example
 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true, useWhammyRecorder: true });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
 * @param {object} config - {disableLogs:true, initCallback: function}
 */

function CanvasRecorder(htmlElement, config) {
    if (typeof html2canvas === 'undefined') {
        throw 'Please link: https://cdn.webrtc-experiment.com/screenshot.js';
    }

    config = config || {};
    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    // via DetectRTC.js
    var isCanvasSupportsStreamCapturing = false;
    ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
        if (item in document.createElement('canvas')) {
            isCanvasSupportsStreamCapturing = true;
        }
    });

    var _isChrome = (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome;

    var chromeVersion = 50;
    var matchArray = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (_isChrome && matchArray && matchArray[2]) {
        chromeVersion = parseInt(matchArray[2], 10);
    }

    if (_isChrome && chromeVersion < 52) {
        isCanvasSupportsStreamCapturing = false;
    }

    if (config.useWhammyRecorder) {
        isCanvasSupportsStreamCapturing = false;
    }

    var globalCanvas, mediaStreamRecorder;

    if (isCanvasSupportsStreamCapturing) {
        if (!config.disableLogs) {
            console.log('Your browser supports both MediRecorder API and canvas.captureStream!');
        }

        if (htmlElement instanceof HTMLCanvasElement) {
            globalCanvas = htmlElement;
        } else if (htmlElement instanceof CanvasRenderingContext2D) {
            globalCanvas = htmlElement.canvas;
        } else {
            throw 'Please pass either HTMLCanvasElement or CanvasRenderingContext2D.';
        }
    } else if (!!navigator.mozGetUserMedia) {
        if (!config.disableLogs) {
            console.error('Canvas recording is NOT supported in Firefox.');
        }
    }

    var isRecording;

    /**
     * This method records Canvas.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        isRecording = true;

        if (isCanvasSupportsStreamCapturing && !config.useWhammyRecorder) {
            // CanvasCaptureMediaStream
            var canvasMediaStream;
            if ('captureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.captureStream(25); // 25 FPS
            } else if ('mozCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.mozCaptureStream(25);
            } else if ('webkitCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.webkitCaptureStream(25);
            }

            try {
                var mdStream = new MediaStream();
                mdStream.addTrack(getTracks(canvasMediaStream, 'video')[0]);
                canvasMediaStream = mdStream;
            } catch (e) {}

            if (!canvasMediaStream) {
                throw 'captureStream API are NOT available.';
            }

            // Note: Jan 18, 2016 status is that, 
            // Firefox MediaRecorder API can't record CanvasCaptureMediaStream object.
            mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
                mimeType: config.mimeType || 'video/webm'
            });
            mediaStreamRecorder.record();
        } else {
            whammy.frames = [];
            lastTime = new Date().getTime();
            drawCanvasFrame();
        }

        if (config.initCallback) {
            config.initCallback();
        }
    };

    this.getWebPImages = function(callback) {
        if (htmlElement.nodeName.toLowerCase() !== 'canvas') {
            callback();
            return;
        }

        var framesLength = whammy.frames.length;
        whammy.frames.forEach(function(frame, idx) {
            var framesRemaining = framesLength - idx;
            if (!config.disableLogs) {
                console.log(framesRemaining + '/' + framesLength + ' frames remaining');
            }

            if (config.onEncodingCallback) {
                config.onEncodingCallback(framesRemaining, framesLength);
            }

            var webp = frame.image.toDataURL('image/webp', 1);
            whammy.frames[idx].image = webp;
        });

        if (!config.disableLogs) {
            console.log('Generating WebM');
        }

        callback();
    };

    /**
     * This method stops recording Canvas.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        isRecording = false;

        var that = this;

        if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
            mediaStreamRecorder.stop(callback);
            return;
        }

        this.getWebPImages(function() {
            /**
             * @property {Blob} blob - Recorded frames in video/webm blob.
             * @memberof CanvasRecorder
             * @example
             * recorder.stop(function() {
             *     var blob = recorder.blob;
             * });
             */
            whammy.compile(function(blob) {
                if (!config.disableLogs) {
                    console.log('Recording finished!');
                }

                that.blob = blob;

                if (that.blob.forEach) {
                    that.blob = new Blob([], {
                        type: 'video/webm'
                    });
                }

                if (callback) {
                    callback(that.blob);
                }

                whammy.frames = [];
            });
        });
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.pause();
            return;
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.resume();
            return;
        }

        if (!isRecording) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (isRecording) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isRecording = false;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'CanvasRecorder';
    this.toString = function() {
        return this.name;
    };

    function cloneCanvas() {
        //create a new canvas
        var newCanvas = document.createElement('canvas');
        var context = newCanvas.getContext('2d');

        //set dimensions
        newCanvas.width = htmlElement.width;
        newCanvas.height = htmlElement.height;

        //apply the old canvas to the new one
        context.drawImage(htmlElement, 0, 0);

        //return the new canvas
        return newCanvas;
    }

    function drawCanvasFrame() {
        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawCanvasFrame, 500);
        }

        if (htmlElement.nodeName.toLowerCase() === 'canvas') {
            var duration = new Date().getTime() - lastTime;
            // via #206, by Jack i.e. @Seymourr
            lastTime = new Date().getTime();

            whammy.frames.push({
                image: cloneCanvas(),
                duration: duration
            });

            if (isRecording) {
                setTimeout(drawCanvasFrame, config.frameInterval);
            }
            return;
        }

        html2canvas(htmlElement, {
            grabMouse: typeof config.showMousePointer === 'undefined' || config.showMousePointer,
            onrendered: function(canvas) {
                var duration = new Date().getTime() - lastTime;
                if (!duration) {
                    return setTimeout(drawCanvasFrame, config.frameInterval);
                }

                // via #206, by Jack i.e. @Seymourr
                lastTime = new Date().getTime();

                whammy.frames.push({
                    image: canvas.toDataURL('image/webp', 1),
                    duration: duration
                });

                if (isRecording) {
                    setTimeout(drawCanvasFrame, config.frameInterval);
                }
            }
        });
    }

    var lastTime = new Date().getTime();

    var whammy = new Whammy.Video(100);
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.CanvasRecorder = CanvasRecorder;
}

// _________________
// WhammyRecorder.js

/**
 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
 * @summary Video recording feature in Chrome.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef WhammyRecorder
 * @class
 * @example
 * var recorder = new WhammyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
 */

function WhammyRecorder(mediaStream, config) {

    config = config || {};

    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    if (!config.disableLogs) {
        console.log('Using frames-interval:', config.frameInterval);
    }

    /**
     * This method records video.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (!config.width) {
            config.width = 320;
        }

        if (!config.height) {
            config.height = 240;
        }

        if (!config.video) {
            config.video = {
                width: config.width,
                height: config.height
            };
        }

        if (!config.canvas) {
            config.canvas = {
                width: config.width,
                height: config.height
            };
        }

        canvas.width = config.canvas.width || 320;
        canvas.height = config.canvas.height || 240;

        context = canvas.getContext('2d');

        // setting defaults
        if (config.video && config.video instanceof HTMLVideoElement) {
            video = config.video.cloneNode();

            if (config.initCallback) {
                config.initCallback();
            }
        } else {
            video = document.createElement('video');

            setSrcObject(mediaStream, video);

            video.onloadedmetadata = function() { // "onloadedmetadata" may NOT work in FF?
                if (config.initCallback) {
                    config.initCallback();
                }
            };

            video.width = config.video.width;
            video.height = config.video.height;
        }

        video.muted = true;
        video.play();

        lastTime = new Date().getTime();
        whammy = new Whammy.Video();

        if (!config.disableLogs) {
            console.log('canvas resolutions', canvas.width, '*', canvas.height);
            console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
        }

        drawFrames(config.frameInterval);
    };

    /**
     * Draw and push frames to Whammy
     * @param {integer} frameInterval - set minimum interval (in milliseconds) between each time we push a frame to Whammy
     */
    function drawFrames(frameInterval) {
        frameInterval = typeof frameInterval !== 'undefined' ? frameInterval : 10;

        var duration = new Date().getTime() - lastTime;
        if (!duration) {
            return setTimeout(drawFrames, frameInterval, frameInterval);
        }

        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawFrames, 100);
        }

        // via #206, by Jack i.e. @Seymourr
        lastTime = new Date().getTime();

        if (video.paused) {
            // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
            // Tweak for Android Chrome
            video.play();
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        whammy.frames.push({
            duration: duration,
            image: canvas.toDataURL('image/webp')
        });

        if (!isStopDrawing) {
            setTimeout(drawFrames, frameInterval, frameInterval);
        }
    }

    function asyncLoop(o) {
        var i = -1,
            length = o.length;

        (function loop() {
            i++;
            if (i === length) {
                o.callback();
                return;
            }

            // "setTimeout" added by Jim McLeod
            setTimeout(function() {
                o.functionToLoop(loop, i);
            }, 1);
        })();
    }


    /**
     * remove black frames from the beginning to the specified frame
     * @param {Array} _frames - array of frames to be checked
     * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
     * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
     * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
     * @returns {Array} - array of frames
     */
    // pull#293 by @volodalexey
    function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance, callback) {
        var localCanvas = document.createElement('canvas');
        localCanvas.width = canvas.width;
        localCanvas.height = canvas.height;
        var context2d = localCanvas.getContext('2d');
        var resultFrames = [];

        var checkUntilNotBlack = _framesToCheck === -1;
        var endCheckFrame = (_framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length) ?
            _framesToCheck : _frames.length;
        var sampleColor = {
            r: 0,
            g: 0,
            b: 0
        };
        var maxColorDifference = Math.sqrt(
            Math.pow(255, 2) +
            Math.pow(255, 2) +
            Math.pow(255, 2)
        );
        var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
        var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
        var doNotCheckNext = false;

        asyncLoop({
            length: endCheckFrame,
            functionToLoop: function(loop, f) {
                var matchPixCount, endPixCheck, maxPixCount;

                var finishImage = function() {
                    if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {
                        // console.log('removed black frame : ' + f + ' ; frame duration ' + _frames[f].duration);
                    } else {
                        // console.log('frame is passed : ' + f);
                        if (checkUntilNotBlack) {
                            doNotCheckNext = true;
                        }
                        resultFrames.push(_frames[f]);
                    }
                    loop();
                };

                if (!doNotCheckNext) {
                    var image = new Image();
                    image.onload = function() {
                        context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
                        var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
                        matchPixCount = 0;
                        endPixCheck = imageData.data.length;
                        maxPixCount = imageData.data.length / 4;

                        for (var pix = 0; pix < endPixCheck; pix += 4) {
                            var currentColor = {
                                r: imageData.data[pix],
                                g: imageData.data[pix + 1],
                                b: imageData.data[pix + 2]
                            };
                            var colorDifference = Math.sqrt(
                                Math.pow(currentColor.r - sampleColor.r, 2) +
                                Math.pow(currentColor.g - sampleColor.g, 2) +
                                Math.pow(currentColor.b - sampleColor.b, 2)
                            );
                            // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)
                            if (colorDifference <= maxColorDifference * pixTolerance) {
                                matchPixCount++;
                            }
                        }
                        finishImage();
                    };
                    image.src = _frames[f].image;
                } else {
                    finishImage();
                }
            },
            callback: function() {
                resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));

                if (resultFrames.length <= 0) {
                    // at least one last frame should be available for next manipulation
                    // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
                    resultFrames.push(_frames[_frames.length - 1]);
                }
                callback(resultFrames);
            }
        });
    }

    var isStopDrawing = false;

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        isStopDrawing = true;

        var _this = this;
        // analyse of all frames takes some time!
        setTimeout(function() {
            // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
            // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
            // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
            dropBlackFrames(whammy.frames, -1, null, null, function(frames) {
                whammy.frames = frames;

                // to display advertisement images!
                if (config.advertisement && config.advertisement.length) {
                    whammy.frames = config.advertisement.concat(whammy.frames);
                }

                /**
                 * @property {Blob} blob - Recorded frames in video/webm blob.
                 * @memberof WhammyRecorder
                 * @example
                 * recorder.stop(function() {
                 *     var blob = recorder.blob;
                 * });
                 */
                whammy.compile(function(blob) {
                    _this.blob = blob;

                    if (_this.blob.forEach) {
                        _this.blob = new Blob([], {
                            type: 'video/webm'
                        });
                    }

                    if (callback) {
                        callback(_this.blob);
                    }
                });
            });
        }, 10);
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (isStopDrawing) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (!isStopDrawing) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isStopDrawing = true;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'WhammyRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    var video;
    var lastTime;
    var whammy;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WhammyRecorder = WhammyRecorder;
}

// https://github.com/antimatter15/whammy/blob/master/LICENSE
// _________
// Whammy.js

// todo: Firefox now supports webp for webm containers!
// their MediaRecorder implementation works well!
// should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?

/**
 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
 * @summary A real time javascript webm encoder based on a canvas hack.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef Whammy
 * @class
 * @example
 * var recorder = new Whammy().Video(15);
 * recorder.add(context || canvas || dataURL);
 * var output = recorder.compile();
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Whammy = (function() {
    // a more abstract-ish API

    function WhammyVideo(duration) {
        this.frames = [];
        this.duration = duration || 1;
        this.quality = 0.8;
    }

    /**
     * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.add(canvas || context || 'image/webp');
     * @param {string} frame - Canvas || Context || image/webp
     * @param {number} duration - Stick a duration (in milliseconds)
     */
    WhammyVideo.prototype.add = function(frame, duration) {
        if ('canvas' in frame) { //CanvasRenderingContext2D
            frame = frame.canvas;
        }

        if ('toDataURL' in frame) {
            frame = frame.toDataURL('image/webp', this.quality);
        }

        if (!(/^data:image\/webp;base64,/ig).test(frame)) {
            throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
        }
        this.frames.push({
            image: frame,
            duration: duration || this.duration
        });
    };

    function processInWebWorker(_function) {
        var blob = URL.createObjectURL(new Blob([_function.toString(),
            'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(blob);
        URL.revokeObjectURL(blob);
        return worker;
    }

    function whammyInWebWorker(frames) {
        function ArrayToWebM(frames) {
            var info = checkFrames(frames);
            if (!info) {
                return [];
            }

            var clusterMaxDuration = 30000;

            var EBML = [{
                'id': 0x1a45dfa3, // EBML
                'data': [{
                    'data': 1,
                    'id': 0x4286 // EBMLVersion
                }, {
                    'data': 1,
                    'id': 0x42f7 // EBMLReadVersion
                }, {
                    'data': 4,
                    'id': 0x42f2 // EBMLMaxIDLength
                }, {
                    'data': 8,
                    'id': 0x42f3 // EBMLMaxSizeLength
                }, {
                    'data': 'webm',
                    'id': 0x4282 // DocType
                }, {
                    'data': 2,
                    'id': 0x4287 // DocTypeVersion
                }, {
                    'data': 2,
                    'id': 0x4285 // DocTypeReadVersion
                }]
            }, {
                'id': 0x18538067, // Segment
                'data': [{
                    'id': 0x1549a966, // Info
                    'data': [{
                        'data': 1e6, //do things in millisecs (num of nanosecs for duration scale)
                        'id': 0x2ad7b1 // TimecodeScale
                    }, {
                        'data': 'whammy',
                        'id': 0x4d80 // MuxingApp
                    }, {
                        'data': 'whammy',
                        'id': 0x5741 // WritingApp
                    }, {
                        'data': doubleToString(info.duration),
                        'id': 0x4489 // Duration
                    }]
                }, {
                    'id': 0x1654ae6b, // Tracks
                    'data': [{
                        'id': 0xae, // TrackEntry
                        'data': [{
                            'data': 1,
                            'id': 0xd7 // TrackNumber
                        }, {
                            'data': 1,
                            'id': 0x73c5 // TrackUID
                        }, {
                            'data': 0,
                            'id': 0x9c // FlagLacing
                        }, {
                            'data': 'und',
                            'id': 0x22b59c // Language
                        }, {
                            'data': 'V_VP8',
                            'id': 0x86 // CodecID
                        }, {
                            'data': 'VP8',
                            'id': 0x258688 // CodecName
                        }, {
                            'data': 1,
                            'id': 0x83 // TrackType
                        }, {
                            'id': 0xe0, // Video
                            'data': [{
                                'data': info.width,
                                'id': 0xb0 // PixelWidth
                            }, {
                                'data': info.height,
                                'id': 0xba // PixelHeight
                            }]
                        }]
                    }]
                }]
            }];

            //Generate clusters (max duration)
            var frameNumber = 0;
            var clusterTimecode = 0;
            while (frameNumber < frames.length) {

                var clusterFrames = [];
                var clusterDuration = 0;
                do {
                    clusterFrames.push(frames[frameNumber]);
                    clusterDuration += frames[frameNumber].duration;
                    frameNumber++;
                } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);

                var clusterCounter = 0;
                var cluster = {
                    'id': 0x1f43b675, // Cluster
                    'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
                }; //Add cluster to segment
                EBML[1].data.push(cluster);
                clusterTimecode += clusterDuration;
            }

            return generateEBML(EBML);
        }

        function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
            return [{
                'data': clusterTimecode,
                'id': 0xe7 // Timecode
            }].concat(clusterFrames.map(function(webp) {
                var block = makeSimpleBlock({
                    discardable: 0,
                    frame: webp.data.slice(4),
                    invisible: 0,
                    keyframe: 1,
                    lacing: 0,
                    trackNum: 1,
                    timecode: Math.round(clusterCounter)
                });
                clusterCounter += webp.duration;
                return {
                    data: block,
                    id: 0xa3
                };
            }));
        }

        // sums the lengths of all the frames and gets the duration

        function checkFrames(frames) {
            if (!frames[0]) {
                postMessage({
                    error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
                });
                return;
            }

            var width = frames[0].width,
                height = frames[0].height,
                duration = frames[0].duration;

            for (var i = 1; i < frames.length; i++) {
                duration += frames[i].duration;
            }
            return {
                duration: duration,
                width: width,
                height: height
            };
        }

        function numToBuffer(num) {
            var parts = [];
            while (num > 0) {
                parts.push(num & 0xff);
                num = num >> 8;
            }
            return new Uint8Array(parts.reverse());
        }

        function strToBuffer(str) {
            return new Uint8Array(str.split('').map(function(e) {
                return e.charCodeAt(0);
            }));
        }

        function bitsToBuffer(bits) {
            var data = [];
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data.push(parseInt(bits.substr(i, 8), 2));
            }
            return new Uint8Array(data);
        }

        function generateEBML(json) {
            var ebml = [];
            for (var i = 0; i < json.length; i++) {
                var data = json[i].data;

                if (typeof data === 'object') {
                    data = generateEBML(data);
                }

                if (typeof data === 'number') {
                    data = bitsToBuffer(data.toString(2));
                }

                if (typeof data === 'string') {
                    data = strToBuffer(data);
                }

                var len = data.size || data.byteLength || data.length;
                var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
                var sizeToString = len.toString(2);
                var padded = (new Array((zeroes * 7 + 7 + 1) - sizeToString.length)).join('0') + sizeToString;
                var size = (new Array(zeroes)).join('0') + '1' + padded;

                ebml.push(numToBuffer(json[i].id));
                ebml.push(bitsToBuffer(size));
                ebml.push(data);
            }

            return new Blob(ebml, {
                type: 'video/webm'
            });
        }

        function toBinStrOld(bits) {
            var data = '';
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
            }
            return data;
        }

        function makeSimpleBlock(data) {
            var flags = 0;

            if (data.keyframe) {
                flags |= 128;
            }

            if (data.invisible) {
                flags |= 8;
            }

            if (data.lacing) {
                flags |= (data.lacing << 1);
            }

            if (data.discardable) {
                flags |= 1;
            }

            if (data.trackNum > 127) {
                throw 'TrackNumber > 127 not supported';
            }

            var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function(e) {
                return String.fromCharCode(e);
            }).join('') + data.frame;

            return out;
        }

        function parseWebP(riff) {
            var VP8 = riff.RIFF[0].WEBP[0];

            var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header
            for (var i = 0, c = []; i < 4; i++) {
                c[i] = VP8.charCodeAt(frameStart + 3 + i);
            }

            var width, height, tmp;

            //the code below is literally copied verbatim from the bitstream spec
            tmp = (c[1] << 8) | c[0];
            width = tmp & 0x3FFF;
            tmp = (c[3] << 8) | c[2];
            height = tmp & 0x3FFF;
            return {
                width: width,
                height: height,
                data: VP8,
                riff: riff
            };
        }

        function getStrLength(string, offset) {
            return parseInt(string.substr(offset + 4, 4).split('').map(function(i) {
                var unpadded = i.charCodeAt(0).toString(2);
                return (new Array(8 - unpadded.length + 1)).join('0') + unpadded;
            }).join(''), 2);
        }

        function parseRIFF(string) {
            var offset = 0;
            var chunks = {};

            while (offset < string.length) {
                var id = string.substr(offset, 4);
                var len = getStrLength(string, offset);
                var data = string.substr(offset + 4 + 4, len);
                offset += 4 + 4 + len;
                chunks[id] = chunks[id] || [];

                if (id === 'RIFF' || id === 'LIST') {
                    chunks[id].push(parseRIFF(data));
                } else {
                    chunks[id].push(data);
                }
            }
            return chunks;
        }

        function doubleToString(num) {
            return [].slice.call(
                new Uint8Array((new Float64Array([num])).buffer), 0).map(function(e) {
                return String.fromCharCode(e);
            }).reverse().join('');
        }

        var webm = new ArrayToWebM(frames.map(function(frame) {
            var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
            webp.duration = frame.duration;
            return webp;
        }));

        postMessage(webm);
    }

    /**
     * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.compile(function(blob) {
     *    // blob.size - blob.type
     * });
     */
    WhammyVideo.prototype.compile = function(callback) {
        var webWorker = processInWebWorker(whammyInWebWorker);

        webWorker.onmessage = function(event) {
            if (event.data.error) {
                console.error(event.data.error);
                return;
            }
            callback(event.data);
        };

        webWorker.postMessage(this.frames);
    };

    return {
        /**
         * A more abstract-ish API.
         * @method
         * @memberof Whammy
         * @example
         * recorder = new Whammy().Video(0.8, 100);
         * @param {?number} speed - 0.8
         * @param {?number} quality - 100
         */
        Video: WhammyVideo
    };
})();

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Whammy = Whammy;
}

// ______________ (indexed-db)
// DiskStorage.js

/**
 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
 * @summary Writing blobs into IndexedDB.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @example
 * DiskStorage.Store({
 *     audioBlob: yourAudioBlob,
 *     videoBlob: yourVideoBlob,
 *     gifBlob  : yourGifBlob
 * });
 * DiskStorage.Fetch(function(dataURL, type) {
 *     if(type === 'audioBlob') { }
 *     if(type === 'videoBlob') { }
 *     if(type === 'gifBlob')   { }
 * });
 * // DiskStorage.dataStoreName = 'recordRTC';
 * // DiskStorage.onError = function(error) { };
 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
 * @property {function} Store - This method stores blobs in IndexedDB.
 * @property {function} onError - This function is invoked for any known/unknown error.
 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


var DiskStorage = {
    /**
     * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.init();
     */
    init: function() {
        var self = this;

        if (typeof indexedDB === 'undefined' || typeof indexedDB.open === 'undefined') {
            console.error('IndexedDB API are not available in this browser.');
            return;
        }

        var dbVersion = 1;
        var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
            db;
        var request = indexedDB.open(dbName, dbVersion);

        function createObjectStore(dataBase) {
            dataBase.createObjectStore(self.dataStoreName);
        }

        function putInDB() {
            var transaction = db.transaction([self.dataStoreName], 'readwrite');

            if (self.videoBlob) {
                transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
            }

            if (self.gifBlob) {
                transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
            }

            if (self.audioBlob) {
                transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
            }

            function getFromStore(portionName) {
                transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
                    if (self.callback) {
                        self.callback(event.target.result, portionName);
                    }
                };
            }

            getFromStore('audioBlob');
            getFromStore('videoBlob');
            getFromStore('gifBlob');
        }

        request.onerror = self.onError;

        request.onsuccess = function() {
            db = request.result;
            db.onerror = self.onError;

            if (db.setVersion) {
                if (db.version !== dbVersion) {
                    var setVersion = db.setVersion(dbVersion);
                    setVersion.onsuccess = function() {
                        createObjectStore(db);
                        putInDB();
                    };
                } else {
                    putInDB();
                }
            } else {
                putInDB();
            }
        };
        request.onupgradeneeded = function(event) {
            createObjectStore(event.target.result);
        };
    },
    /**
     * This method fetches stored blobs from IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Fetch(function(dataURL, type) {
     *     if(type === 'audioBlob') { }
     *     if(type === 'videoBlob') { }
     *     if(type === 'gifBlob')   { }
     * });
     */
    Fetch: function(callback) {
        this.callback = callback;
        this.init();

        return this;
    },
    /**
     * This method stores blobs in IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Store({
     *     audioBlob: yourAudioBlob,
     *     videoBlob: yourVideoBlob,
     *     gifBlob  : yourGifBlob
     * });
     */
    Store: function(config) {
        this.audioBlob = config.audioBlob;
        this.videoBlob = config.videoBlob;
        this.gifBlob = config.gifBlob;

        this.init();

        return this;
    },
    /**
     * This function is invoked for any known/unknown error.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.onError = function(error){
     *     alerot( JSON.stringify(error) );
     * };
     */
    onError: function(error) {
        console.error(JSON.stringify(error, null, '\t'));
    },

    /**
     * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.dataStoreName = 'recordRTC';
     */
    dataStoreName: 'recordRTC',
    dbName: null
};

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.DiskStorage = DiskStorage;
}

// ______________
// GifRecorder.js

/**
 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef GifRecorder
 * @class
 * @example
 * var recorder = new GifRecorder(mediaStream || canvas || context, { onGifPreview: function, onGifRecordingStarted: function, width: 1280, height: 720, frameRate: 200, quality: 10 });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     img.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
 */

function GifRecorder(mediaStream, config) {
    if (typeof GIFEncoder === 'undefined') {
        var script = document.createElement('script');
        script.src = 'https://cdn.webrtc-experiment.com/gif-recorder.js';
        (document.body || document.documentElement).appendChild(script);
    }

    config = config || {};

    var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;

    /**
     * This method records MediaStream.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (typeof GIFEncoder === 'undefined') {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isLoadedMetaData) {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isHTMLObject) {
            if (!config.width) {
                config.width = video.offsetWidth || 320;
            }

            if (!config.height) {
                config.height = video.offsetHeight || 240;
            }

            if (!config.video) {
                config.video = {
                    width: config.width,
                    height: config.height
                };
            }

            if (!config.canvas) {
                config.canvas = {
                    width: config.width,
                    height: config.height
                };
            }

            canvas.width = config.canvas.width || 320;
            canvas.height = config.canvas.height || 240;

            video.width = config.video.width || 320;
            video.height = config.video.height || 240;
        }

        // external library to record as GIF images
        gifEncoder = new GIFEncoder();

        // void setRepeat(int iter) 
        // Sets the number of times the set of GIF frames should be played. 
        // Default is 1; 0 means play indefinitely.
        gifEncoder.setRepeat(0);

        // void setFrameRate(Number fps) 
        // Sets frame rate in frames per second. 
        // Equivalent to setDelay(1000/fps).
        // Using "setDelay" instead of "setFrameRate"
        gifEncoder.setDelay(config.frameRate || 200);

        // void setQuality(int quality) 
        // Sets quality of color quantization (conversion of images to the 
        // maximum 256 colors allowed by the GIF specification). 
        // Lower values (minimum = 1) produce better colors, 
        // but slow processing significantly. 10 is the default, 
        // and produces good color mapping at reasonable speeds. 
        // Values greater than 20 do not yield significant improvements in speed.
        gifEncoder.setQuality(config.quality || 10);

        // Boolean start() 
        // This writes the GIF Header and returns false if it fails.
        gifEncoder.start();

        if (typeof config.onGifRecordingStarted === 'function') {
            config.onGifRecordingStarted();
        }

        startTime = Date.now();

        function drawVideoFrame(time) {
            if (self.clearedRecordedData === true) {
                return;
            }

            if (isPausedRecording) {
                return setTimeout(function() {
                    drawVideoFrame(time);
                }, 100);
            }

            lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

            if (typeof lastFrameTime === undefined) {
                lastFrameTime = time;
            }

            // ~10 fps
            if (time - lastFrameTime < 90) {
                return;
            }

            if (!isHTMLObject && video.paused) {
                // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
                // Tweak for Android Chrome
                video.play();
            }

            if (!isHTMLObject) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
            }

            if (config.onGifPreview) {
                config.onGifPreview(canvas.toDataURL('image/png'));
            }

            gifEncoder.addFrame(context);
            lastFrameTime = time;
        }

        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

        if (config.initCallback) {
            config.initCallback();
        }
    };

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.stop(function(blob) {
     *     img.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        if (lastAnimationFrame) {
            cancelAnimationFrame(lastAnimationFrame);
        }

        endTime = Date.now();

        /**
         * @property {Blob} blob - The recorded blob object.
         * @memberof GifRecorder
         * @example
         * recorder.stop(function(){
         *     var blob = recorder.blob;
         * });
         */
        this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
            type: 'image/gif'
        });

        callback(this.blob);

        // bug: find a way to clear old recorded blobs
        gifEncoder.stream().bin = [];
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        self.clearedRecordedData = true;
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        if (gifEncoder) {
            gifEncoder.stream().bin = [];
        }
    }

    // for debugging
    this.name = 'GifRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    if (isHTMLObject) {
        if (mediaStream instanceof CanvasRenderingContext2D) {
            context = mediaStream;
            canvas = context.canvas;
        } else if (mediaStream instanceof HTMLCanvasElement) {
            context = mediaStream.getContext('2d');
            canvas = mediaStream;
        }
    }

    var isLoadedMetaData = true;

    if (!isHTMLObject) {
        var video = document.createElement('video');
        video.muted = true;
        video.autoplay = true;

        isLoadedMetaData = false;
        video.onloadedmetadata = function() {
            isLoadedMetaData = true;
        };

        setSrcObject(mediaStream, video);

        video.play();
    }

    var lastAnimationFrame = null;
    var startTime, endTime, lastFrameTime;

    var gifEncoder;

    var self = this;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.GifRecorder = GifRecorder;
}

// Last time updated: 2018-12-22 9:13:29 AM UTC

// ________________________
// MultiStreamsMixer v1.0.7

// Open-Sourced: https://github.com/muaz-khan/MultiStreamsMixer

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

function MultiStreamsMixer(arrayOfMediaStreams) {

    // requires: chrome://flags/#enable-experimental-web-platform-features

    var videos = [];
    var isStopDrawingFrames = false;

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.style = 'opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000; margin-top:-1000000000;margin-left:-1000000000;';
    (document.body || document.documentElement).appendChild(canvas);

    this.disableLogs = false;
    this.frameInterval = 10;

    this.width = 360;
    this.height = 240;

    // use gain node to prevent echo
    this.useGainNode = true;

    var self = this;

    // _____________________________
    // Cross-Browser-Declarations.js

    // WebAudio API representer
    var AudioContext = window.AudioContext;

    if (typeof AudioContext === 'undefined') {
        if (typeof webkitAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = webkitAudioContext;
        }

        if (typeof mozAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = mozAudioContext;
        }
    }

    /*jshint -W079 */
    var URL = window.URL;

    if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
        /*global URL:true */
        URL = webkitURL;
    }

    if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
        if (typeof navigator.webkitGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.webkitGetUserMedia;
        }

        if (typeof navigator.mozGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.mozGetUserMedia;
        }
    }

    var MediaStream = window.MediaStream;

    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
        MediaStream = webkitMediaStream;
    }

    /*global MediaStream:true */
    if (typeof MediaStream !== 'undefined') {
        // override "stop" method for all browsers
        if (typeof MediaStream.prototype.stop === 'undefined') {
            MediaStream.prototype.stop = function() {
                this.getTracks().forEach(function(track) {
                    track.stop();
                });
            };
        }
    }

    var Storage = {};

    if (typeof AudioContext !== 'undefined') {
        Storage.AudioContext = AudioContext;
    } else if (typeof webkitAudioContext !== 'undefined') {
        Storage.AudioContext = webkitAudioContext;
    }

    function setSrcObject(stream, element) {
        if ('srcObject' in element) {
            element.srcObject = stream;
        } else if ('mozSrcObject' in element) {
            element.mozSrcObject = stream;
        } else {
            element.srcObject = stream;
        }
    }

    this.startDrawingFrames = function() {
        drawVideosToCanvas();
    };

    function drawVideosToCanvas() {
        if (isStopDrawingFrames) {
            return;
        }

        var videosLength = videos.length;

        var fullcanvas = false;
        var remaining = [];
        videos.forEach(function(video) {
            if (!video.stream) {
                video.stream = {};
            }

            if (video.stream.fullcanvas) {
                fullcanvas = video;
            } else {
                remaining.push(video);
            }
        });

        if (fullcanvas) {
            canvas.width = fullcanvas.stream.width;
            canvas.height = fullcanvas.stream.height;
        } else if (remaining.length) {
            canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;

            var height = 1;
            if (videosLength === 3 || videosLength === 4) {
                height = 2;
            }
            if (videosLength === 5 || videosLength === 6) {
                height = 3;
            }
            if (videosLength === 7 || videosLength === 8) {
                height = 4;
            }
            if (videosLength === 9 || videosLength === 10) {
                height = 5;
            }
            canvas.height = remaining[0].height * height;
        } else {
            canvas.width = self.width || 360;
            canvas.height = self.height || 240;
        }

        if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
            drawImage(fullcanvas);
        }

        remaining.forEach(function(video, idx) {
            drawImage(video, idx);
        });

        setTimeout(drawVideosToCanvas, self.frameInterval);
    }

    function drawImage(video, idx) {
        if (isStopDrawingFrames) {
            return;
        }

        var x = 0;
        var y = 0;
        var width = video.width;
        var height = video.height;

        if (idx === 1) {
            x = video.width;
        }

        if (idx === 2) {
            y = video.height;
        }

        if (idx === 3) {
            x = video.width;
            y = video.height;
        }

        if (idx === 4) {
            y = video.height * 2;
        }

        if (idx === 5) {
            x = video.width;
            y = video.height * 2;
        }

        if (idx === 6) {
            y = video.height * 3;
        }

        if (idx === 7) {
            x = video.width;
            y = video.height * 3;
        }

        if (typeof video.stream.left !== 'undefined') {
            x = video.stream.left;
        }

        if (typeof video.stream.top !== 'undefined') {
            y = video.stream.top;
        }

        if (typeof video.stream.width !== 'undefined') {
            width = video.stream.width;
        }

        if (typeof video.stream.height !== 'undefined') {
            height = video.stream.height;
        }

        context.drawImage(video, x, y, width, height);

        if (typeof video.stream.onRender === 'function') {
            video.stream.onRender(context, x, y, width, height, idx);
        }
    }

    function getMixedStream() {
        isStopDrawingFrames = false;
        var mixedVideoStream = getMixedVideoStream();

        var mixedAudioStream = getMixedAudioStream();
        if (mixedAudioStream) {
            mixedAudioStream.getTracks().filter(function(t) {
                return t.kind === 'audio';
            }).forEach(function(track) {
                mixedVideoStream.addTrack(track);
            });
        }

        var fullcanvas;
        arrayOfMediaStreams.forEach(function(stream) {
            if (stream.fullcanvas) {
                fullcanvas = true;
            }
        });

        return mixedVideoStream;
    }

    function getMixedVideoStream() {
        resetVideoStreams();

        var capturedStream;

        if ('captureStream' in canvas) {
            capturedStream = canvas.captureStream();
        } else if ('mozCaptureStream' in canvas) {
            capturedStream = canvas.mozCaptureStream();
        } else if (!self.disableLogs) {
            console.error('Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features');
        }

        var videoStream = new MediaStream();

        capturedStream.getTracks().filter(function(t) {
            return t.kind === 'video';
        }).forEach(function(track) {
            videoStream.addTrack(track);
        });

        canvas.stream = videoStream;

        return videoStream;
    }

    function getMixedAudioStream() {
        // via: @pehrsons
        if (!Storage.AudioContextConstructor) {
            Storage.AudioContextConstructor = new Storage.AudioContext();
        }

        self.audioContext = Storage.AudioContextConstructor;

        self.audioSources = [];

        if (self.useGainNode === true) {
            self.gainNode = self.audioContext.createGain();
            self.gainNode.connect(self.audioContext.destination);
            self.gainNode.gain.value = 0; // don't hear self
        }

        var audioTracksLength = 0;
        arrayOfMediaStreams.forEach(function(stream) {
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length) {
                return;
            }

            audioTracksLength++;

            var audioSource = self.audioContext.createMediaStreamSource(stream);

            if (self.useGainNode === true) {
                audioSource.connect(self.gainNode);
            }

            self.audioSources.push(audioSource);
        });

        if (!audioTracksLength) {
            return;
        }

        self.audioDestination = self.audioContext.createMediaStreamDestination();
        self.audioSources.forEach(function(audioSource) {
            audioSource.connect(self.audioDestination);
        });
        return self.audioDestination.stream;
    }

    function getVideo(stream) {
        var video = document.createElement('video');

        setSrcObject(stream, video);

        video.muted = true;
        video.volume = 0;

        video.width = stream.width || self.width || 360;
        video.height = stream.height || self.height || 240;

        video.play();

        return video;
    }

    this.appendStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        streams.forEach(function(stream) {
            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
                var video = getVideo(stream);
                video.stream = stream;
                videos.push(video);
            }

            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length && self.audioContext) {
                var audioSource = self.audioContext.createMediaStreamSource(stream);
                audioSource.connect(self.audioDestination);
                self.audioSources.push(audioSource);
            }
        });
    };

    this.releaseStreams = function() {
        videos = [];
        isStopDrawingFrames = true;

        if (self.gainNode) {
            self.gainNode.disconnect();
            self.gainNode = null;
        }

        if (self.audioSources.length) {
            self.audioSources.forEach(function(source) {
                source.disconnect();
            });
            self.audioSources = [];
        }

        if (self.audioDestination) {
            self.audioDestination.disconnect();
            self.audioDestination = null;
        }

        if (self.audioContext) {
            self.audioContext.close();
        }

        self.audioContext = null;

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (canvas.stream) {
            canvas.stream.stop();
            canvas.stream = null;
        }
    };

    this.resetVideoStreams = function(streams) {
        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        resetVideoStreams(streams);
    };

    function resetVideoStreams(streams) {
        videos = [];
        streams = streams || arrayOfMediaStreams;

        // via: @adrian-ber
        streams.forEach(function(stream) {
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
                return;
            }

            var video = getVideo(stream);
            video.stream = stream;
            videos.push(video);
        });
    }

    // for debugging
    this.name = 'MultiStreamsMixer';
    this.toString = function() {
        return this.name;
    };

    this.getMixedStream = getMixedStream;

}

// ______________________
// MultiStreamRecorder.js

/*
 * Video conference recording, using captureStream API along with WebAudio and Canvas2D API.
 */

/**
 * MultiStreamRecorder can record multiple videos in single container.
 * @summary Multi-videos recorder.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef MultiStreamRecorder
 * @class
 * @example
 * var options = {
 *     mimeType: 'video/webm'
 * }
 * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStreams} mediaStreams - Array of MediaStreams.
 * @param {object} config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
 */

function MultiStreamRecorder(arrayOfMediaStreams, options) {
    arrayOfMediaStreams = arrayOfMediaStreams || [];
    var self = this;

    var mixer;
    var mediaRecorder;

    options = options || {
        mimeType: 'video/webm',
        video: {
            width: 360,
            height: 240
        }
    };

    if (!options.frameInterval) {
        options.frameInterval = 10;
    }

    if (!options.video) {
        options.video = {};
    }

    if (!options.video.width) {
        options.video.width = 360;
    }

    if (!options.video.height) {
        options.video.height = 240;
    }

    /**
     * This method records all MediaStreams.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // github/muaz-khan/MultiStreamsMixer
        mixer = new MultiStreamsMixer(arrayOfMediaStreams);

        if (getAllVideoTracks().length) {
            mixer.frameInterval = options.frameInterval || 10;
            mixer.width = options.video.width || 360;
            mixer.height = options.video.height || 240;
            mixer.startDrawingFrames();
        }

        if (options.previewStream && typeof options.previewStream === 'function') {
            options.previewStream(mixer.getMixedStream());
        }

        // record using MediaRecorder API
        mediaRecorder = new MediaStreamRecorder(mixer.getMixedStream(), options);
        mediaRecorder.record();
    };

    function getAllVideoTracks() {
        var tracks = [];
        arrayOfMediaStreams.forEach(function(stream) {
            getTracks(stream, 'video').forEach(function(track) {
                tracks.push(track);
            });
        });
        return tracks;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        if (!mediaRecorder) {
            return;
        }

        mediaRecorder.stop(function(blob) {
            self.blob = blob;

            callback(blob);

            self.clearRecordedData();
        });
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (mediaRecorder) {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (mediaRecorder) {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder = null;
        }

        if (mixer) {
            mixer.releaseStreams();
            mixer = null;
        }
    };

    /**
     * Add extra media-streams to existing recordings.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.addStreams([newAudioStream, newVideoStream]);
     */
    this.addStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        if (!mediaRecorder || !mixer) {
            return;
        }

        mixer.appendStreams(streams);
    };

    /**
     * Reset videos during live recording. Replace old videos e.g. replace cameras with full-screen.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.resetVideoStreams([newVideo1, newVideo2]);
     */
    this.resetVideoStreams = function(streams) {
        if (!mixer) {
            return;
        }

        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        mixer.resetVideoStreams(streams);
    };

    // for debugging
    this.name = 'MultiStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MultiStreamRecorder = MultiStreamRecorder;
}

// _____________________
// RecordRTC.promises.js

/**
 * RecordRTCPromisesHandler adds promises support in {@link RecordRTC}. Try a {@link https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/RecordRTCPromisesHandler.html|demo here}
 * @summary Promises for {@link RecordRTC}
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCPromisesHandler
 * @class
 * @example
 * var recorder = new RecordRTCPromisesHandler(mediaStream, options);
 * recorder.startRecording()
 *         .then(successCB)
 *         .catch(errorCB);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 * @throws Will throw an error if "new" keyword is not used to initiate "RecordRTCPromisesHandler". Also throws error if first argument "MediaStream" is missing.
 * @requires {@link RecordRTC}
 */

function RecordRTCPromisesHandler(mediaStream, options) {
    if (!this) {
        throw 'Use "new RecordRTCPromisesHandler()"';
    }

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    var self = this;

    /**
     * @property {Blob} blob - Access/reach the native {@link RecordRTC} object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * var internal = recorder.recordRTC.getInternalRecorder();
     * alert(internal instanceof MediaStreamRecorder);
     */
    self.recordRTC = new RecordRTC(mediaStream, options);

    /**
     * This method records MediaStream.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.startRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.startRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.startRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method stops the recording.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.stopRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.stopRecording(function(url) {
                    self.blob = self.recordRTC.getBlob();

                    if (!self.blob || !self.blob.size) {
                        reject('Empty blob.', self.blob);
                        return;
                    }

                    resolve(url);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns data-url for the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getDataURL().then(function(dataURL) {
     *         window.open(dataURL);
     *     }).catch(errorCB);;
     * }).catch(errorCB);
     */
    this.getDataURL = function(callback) {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.getDataURL(function(dataURL) {
                    resolve(dataURL);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getBlob().then(function(blob) {})
     * }).catch(errorCB);
     */
    this.getBlob = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.getBlob());
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler;
}

// ______________________
// WebAssemblyRecorder.js

/**
 * WebAssemblyRecorder lets you create webm videos in JavaScript via WebAssembly. The library consumes raw RGBA32 buffers (4 bytes per pixel) and turns them into a webm video with the given framerate and quality. This makes it compatible out-of-the-box with ImageData from a CANVAS. With realtime mode you can also use webm-wasm for streaming webm videos.
 * @summary Video recording feature in Chrome, Firefox and maybe Edge.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef WebAssemblyRecorder
 * @class
 * @example
 * var recorder = new WebAssemblyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {webAssemblyPath:'webm-wasm.wasm',workerPath: 'webm-worker.js', frameRate: 30, width: 1920, height: 1080, bitrate: 1024}
 */
function WebAssemblyRecorder(stream, config) {
    // based on: github.com/GoogleChromeLabs/webm-wasm

    if (typeof ReadableStream === 'undefined' || typeof WritableStream === 'undefined') {
        // because it fixes readable/writable streams issues
        console.error('Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js');
    }

    config = config || {};

    config.width = config.width || 640;
    config.height = config.height || 480;
    config.frameRate = config.frameRate || 30;
    config.bitrate = config.bitrate || 1200;

    function createBufferURL(buffer, type) {
        return URL.createObjectURL(new Blob([buffer], {
            type: type || ''
        }));
    }

    function cameraStream() {
        return new ReadableStream({
            start: function(controller) {
                var cvs = document.createElement('canvas');
                var video = document.createElement('video');
                video.srcObject = stream;
                video.onplaying = function() {
                    cvs.width = config.width;
                    cvs.height = config.height;
                    var ctx = cvs.getContext('2d');
                    var frameTimeout = 1000 / config.frameRate;
                    setTimeout(function f() {
                        ctx.drawImage(video, 0, 0);
                        controller.enqueue(
                            ctx.getImageData(0, 0, config.width, config.height)
                        );
                        setTimeout(f, frameTimeout);
                    }, frameTimeout);
                };
                video.play();
            }
        });
    }

    var worker;

    function startRecording(stream, buffer) {
        if (!config.workerPath && !buffer) {
            // is it safe to use @latest ?
            fetch(
                'https://unpkg.com/webm-wasm@latest/dist/webm-worker.js'
            ).then(function(r) {
                r.arrayBuffer().then(function(buffer) {
                    startRecording(stream, buffer);
                });
            });
            return;
        }

        if (!config.workerPath && buffer instanceof ArrayBuffer) {
            var blob = new Blob([buffer], {
                type: 'text/javascript'
            });
            config.workerPath = URL.createObjectURL(blob);
        }

        if (!config.workerPath) {
            console.error('workerPath parameter is missing.');
        }

        worker = new Worker(config.workerPath);

        worker.postMessage(config.webAssemblyPath || 'https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm');
        worker.addEventListener('message', function(event) {
            if (event.data === 'READY') {
                worker.postMessage({
                    width: config.width,
                    height: config.height,
                    bitrate: config.bitrate || 1200,
                    timebaseDen: config.frameRate || 30,
                    realtime: true
                });

                cameraStream().pipeTo(new WritableStream({
                    write: function(image) {
                        if (!worker) {
                            return;
                        }

                        worker.postMessage(image.data.buffer, [image.data.buffer]);
                    }
                }));
            } else if (!!event.data) {
                if (!isPaused) {
                    arrayOfBuffers.push(event.data);
                }
            }
        });
    }

    /**
     * This method records video.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;
        startRecording(stream);

        if (typeof config.initCallback === 'function') {
            config.initCallback();
        }
    };

    var isPaused;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPaused = false;
    };

    function terminate() {
        if (!worker) {
            return;
        }

        worker.postMessage(null);
        worker.terminate();
        worker = null;
    }

    var arrayOfBuffers = [];

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        terminate();

        this.blob = new Blob(arrayOfBuffers, {
            type: 'video/webm'
        });

        callback(this.blob);
    };

    // for debugging
    this.name = 'WebAssemblyRecorder';
    this.toString = function() {
        return this.name;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;

        // todo: if recording-ON then STOP it first
    };

    /**
     * @property {Blob} blob - The recorded blob object.
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(){
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WebAssemblyRecorder = WebAssemblyRecorder;
}






/////////////////////////





AWS.config.region = 'us-east-1'; // 1. Enter your region

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:7ea26b5d-926b-44fd-8936-f8bec3c89452' // 2. Enter your identity pool
});

AWS.config.credentials.get(function(err) {
    if (err) alert(err);
    console.log(AWS.config.credentials);
});

var bucketName = 'immortify-videos'; // Enter your bucket name+

var bucket = new AWS.S3({
    params: {
        Bucket: bucketName
    }
});

var fileChooser = document.getElementById('file-chooser');
var button = document.getElementById('upload-button');
var results = document.getElementById('results');
var percentage = document.getElementById('percentage');
var cancelUpload = document.getElementById('cancel-button');

function dataURLtoFile(dataurl, filename) {

var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
bstr = atob(arr[2]), n = bstr.length, u8arr = new Uint8Array(n);
while(n--){
    u8arr[n] = bstr.charCodeAt(n);
}
return new File([u8arr], filename, {type:mime});
}
// Store a reference of the preview video element and a global reference to the recorder instance
var video = document.getElementById('my-preview');
var recorder;

// When the user clicks on start video recording
document.getElementById('btn-start-recording').addEventListener("click", function(){
// Disable start recording button
this.disabled = true;

const audioSource = audioInputSelect.value;
const videoSource = videoSelect.value;
const constraints = {
  audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
  video: {deviceId: videoSource ? {exact: videoSource} : undefined}
};

// Request access to the media devices
navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
// Display a live preview on the video element of the page
setSrcObject(stream, video);

// Start to display the preview on the video element
// and mute the video to disable the echo issue !
video.play();
video.muted = true;

// Initialize the recorder
recorder = new RecordRTCPromisesHandler(stream, {
    mimeType: 'video/webm',
    bitsPerSecond: 1280000
});

// Start recording the video
recorder.startRecording().then(function() {
    console.info('Recording video ...');
}).catch(function(error) {
    console.log(error);
    console.error('Cannot start video recording: ', error);
});

// release stream on stopRecording
recorder.stream = stream;

// Enable stop recording button
document.getElementById('btn-stop-recording').disabled = false;
}).catch(function(error) {
       console.log(error);
console.error("Cannot access media devices: ", error);
});
}, false);

// When the user clicks on Stop video recording
document.getElementById('btn-stop-recording').addEventListener("click", function(){
this.disabled = true;

recorder.stopRecording().then(function() {
console.info('stopRecording success');

var DataUrl = recorder.getDataURL();
var random = Math.random( ); 
DataUrl.then(function(result) {

var url_file = dataURLtoFile(result, random +'.webm');

var objKey = url_file.name;
var params = {
    Key: objKey,
    ContentType: url_file.type,
    Body: url_file,
    ACL: 'public-read'
};

// bucket.putObject(params, function(err, data) {
//     if (err) {
//         results.innerHTML = 'ERROR: ' + err;
//     } else {
//         listObjs();
//     }
// });
var request = bucket.putObject(params);

request.on('httpUploadProgress', function (progress) {
    percentage.innerHTML = parseInt((progress.loaded * 100) / progress.total)+'%'; 
    console.log("Uploaded :: " + parseInt((progress.loaded * 100) / progress.total)+'%');
   // console.log(progress.loaded + " of " + progress.total + " bytes");
}).send(function(err, data){
    percentage.innerHTML = "File has been uploaded successfully.";
//                listObjs();
});


  cancelUpload.addEventListener('click', function() {
        if(request.abort()){
            percentage.innerHTML = "Uploading has been canceled.";
        }
    });



// here you can use the result of promiseB
});

// Retrieve recorded video as blob and display in the preview element
/*           var videoBlob = recorder.getBlob();

var blobUrl = URL.createObjectURL(videoBlob);

console.log("Blob url" + blobUrl);

video.srcObject = videoBlob;
video.src = URL.createObjectURL(videoBlob);
video.play();

// Unmute video on preview
video.muted = false;

// Stop the device streaming
recorder.stream.stop();
*/
// Enable record button again !
document.getElementById('btn-start-recording').disabled = false;
}).catch(function(error) {
console.error('stopRecording failure', error);
});
}, false);
         
function listObjs() {
var prefix = '';
bucket.listObjects({
Prefix: prefix
}, function(err, data) {
if (err) {
    results.innerHTML = 'ERROR: ' + err;
} else {
    var objKeys = "";
    data.Contents.forEach(function(obj) {
        objKeys += obj.Key + "<br>";
    });
    results.innerHTML = objKeys;
}
});
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function myFunction() {
    modal.style.display = "block";
}
  
'use strict';

const videoElement = document.querySelector('video');
const audioInputSelect = document.querySelector('select#audioSource');
const audioOutputSelect = document.querySelector('select#audioOutput');
const videoSelect = document.querySelector('select#videoSource');
const selectors = [audioInputSelect, audioOutputSelect, videoSelect];

audioOutputSelect.disabled = !('sinkId' in HTMLMediaElement.prototype);

function gotDevices(deviceInfos) {
  // Handles being called several times to update labels. Preserve values.
  const values = selectors.map(select => select.value);
  selectors.forEach(select => {
    while (select.firstChild) {
      select.removeChild(select.firstChild);
    }
  });
  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    const option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'audioinput') {
      option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
      audioInputSelect.appendChild(option);
    } else if (deviceInfo.kind === 'audiooutput') {
      option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
      audioOutputSelect.appendChild(option);
    } else if (deviceInfo.kind === 'videoinput') {
      option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
      videoSelect.appendChild(option);
    } else {
      console.log('Some other kind of source/device: ', deviceInfo);
    }
  }
  selectors.forEach((select, selectorIndex) => {
    if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
      select.value = values[selectorIndex];
    }
  });
}

navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);

// Attach audio output device to video element using device/sink ID.
function attachSinkId(element, sinkId) {
  if (typeof element.sinkId !== 'undefined') {
    element.setSinkId(sinkId)
        .then(() => {
          console.log(`Success, audio output device attached: ${sinkId}`);
        })
        .catch(error => {
          let errorMessage = error;
          if (error.name === 'SecurityError') {
            errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
          }
          console.error(errorMessage);
          // Jump back to first output device in the list as it's the default.
          audioOutputSelect.selectedIndex = 0;
        });
  } else {
    console.warn('Browser does not support output device selection.');
  }
}

function handleError(error) {
    console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
  }
/*  
  // Request access to the media devices
  navigator.mediaDevices.getUserMedia({
    audio: true, 
    video: true
    }).then(function(stream) {
    // Display a live preview on the video element of the page
    setSrcObject(stream, video);
    
    // Start to display the preview on the video element
    // and mute the video to disable the echo issue !
    video.play();
    video.muted = true;
    })
 */ 

function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(track => {
      track.stop();
    });
  }
  const audioSource = audioInputSelect.value;
  const videoSource = videoSelect.value;
  const constraints = {
    audio: {deviceId: audioSource ? {exact: audioSource} : undefined},
    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
  };
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream){

    setSrcObject(stream, video);
    
    // Start to display the preview on the video element
    // and mute the video to disable the echo issue !
    video.play();   
  });
}

audioInputSelect.onchange = start;
videoSelect.onchange = start;
start();
