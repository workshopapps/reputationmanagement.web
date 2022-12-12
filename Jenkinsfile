pipeline {

  agent any
  
  stages {
    
    stage("Build Frontend"){
      
      steps{
            //Yarn
            sh "cd frontend && sudo npm install"
            sh "cd frontend && sudo npm run build"
      
      }
    
    }
	  
    stage("test frontend"){

	steps {
		sh "cd frontend && npm i"
		sh "cd frontend && npm run test"
			}
        	}
    
    stage("Deploy App"){
      
      steps{
            sh "sudo cp -fr ${WORKSPACE}/frontend/* /home/ehmeeops/reputationmanagement.web/frontend/"
            sh "sudo systemctl restart repute-client.service"
      }
    }
  
  } 
  
  post{
    failure{
        emailext attachLog: true, 
        to: 'mhizxeryl@gmail.com@gmail.com',
        subject: '${BUILD_TAG} Build failed',
        body: '${BUILD_TAG} Build Failed \nMore Info can be found here: ${BUILD_URL} or in the log file below'
    }
  }
  
}
