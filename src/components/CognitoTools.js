import * as AWSCognitoIdentity from 'amazon-cognito-identity-js'
import AWS from 'aws-sdk'
AWS.config.region = 'ap-southeast-2'

var poolData = {
  UserPoolId: 'ap-southeast-2_oTjz7ncJn',
  ClientId: '3uljbl4jc18knbc3qc1a4sei5m'
}
var userPool = new AWSCognitoIdentity.CognitoUserPool(poolData)

export function cognitoSignUp (username, password, email) {
  var attributeList = []
  var dataEmail = {
    Name: 'email',
    Value: email
  }
  var attributeEmail = new AWSCognitoIdentity.CognitoUserAttribute(dataEmail)
  attributeList.push(attributeEmail)
  userPool.signUp(username, password, attributeList, null, function (err, result) {
    if (err) {
      alert(err.message)
      return
    }
    var cognitoUser = result.user
    sessionStorage.setItem('_username', cognitoUser.getUsername())
    window.location.href = '#/confirm'
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
      sessionStorage.setItem('_username', uname)
      window.location.href = '#/welcome'
    },
    onFailure: function (err) {
      alert(err.message)
    }
  })
}
