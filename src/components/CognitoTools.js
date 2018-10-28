import * as AWSCognitoIdentity from 'amazon-cognito-identity-js'
import AWS from 'aws-sdk'
AWS.config.region = 'ap-southeast-2'

var poolData = {
  UserPoolId: 'ap-southeast-2_oTjz7ncJn',
  ClientId: '3uljbl4jc18knbc3qc1a4sei5m'
}
var userPool = new AWSCognitoIdentity.CognitoUserPool(poolData)
var attributeList = []
var dataEmail = {
  Name: 'email',
  Value: 'hysh1991@hotmail.com'
}
var attributeEmail = new AWSCognitoIdentity.CognitoUserAttribute(dataEmail)

attributeList.push(attributeEmail)

export function cognitoSignUp () {
  userPool.signUp('username', 'Pass1234', attributeList, null, function (err, result) {
    if (err) {
      console.log(err)
      alert(err)
      return
    }
    var cognitoUser = result.user
    console.log(cognitoUser)
    console.log(cognitoUser.getUsername())
  })
}

export function cognitoSignIn (uname, pass) {
  var authenticationData = {
    Username: uname,
    Password: pass
  }
  var authenticationDetails = new AWSCognitoIdentity.AuthenticationDetails(authenticationData)
  var userData = {
    Username: uname,
    Pool: userPool
  }
  var cognitoUser = new AWSCognitoIdentity.CognitoUser(userData)
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      console.log(result)
    },
    onFailure: function (err) {
      console.log(err)
    }
  })
}
