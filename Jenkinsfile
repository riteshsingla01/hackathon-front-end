pipeline {

  agent {
    node {
      label 'master'
    }  
  }
  
  parameters {
      string(name: 'credential', defaultValue : 'awscredentials', description: "Jenkins credential that provides the AWS access key and secret.")
  }

  options {
    disableConcurrentBuilds()
    timeout(time: 1, unit: 'HOURS')
    ansiColor('xterm')
  }

  stages {
   
    stage('Build image') {
      steps {
         script {
            sh 'docker build -t 685420145038.dkr.ecr.us-east-1.amazonaws.com/hackathon-fe:latest .'
         }
      }
    }

    stage('Push image') {
      steps {
         script {
           docker.withRegistry('https://685420145038.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:awscredentials') {
             sh 'docker push 685420145038.dkr.ecr.us-east-1.amazonaws.com/hackathon-fe:latest'
           }
         }
      }
    }
    
  }

}
