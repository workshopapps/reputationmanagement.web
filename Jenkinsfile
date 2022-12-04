pipeline {

	agent any

	stages {

        stage("Get repo"){

			steps {
				sh "rm -rf ${WORKSPACE}/reputationmanagement.web"
				sh "git clone https://github.com/workshopapps/reputationmanagement.web.git"
				sh "sudo cp -r ${WORKSPACE}/reputationmanagement.web /home/ehmeeops/reputationmanagement.web"
			}

		}

		stage("build frontend"){

			steps {
				sh "cd reputationmanagement.web"
				sh "cd reputationmanagement.web/frontend && npm i --force && CI=false npm run build"
			}
        }
    
    stage("test frontend"){

			steps {
				sh "cd reputationmanagement.web"
				sh "cd reputationmanagement.web/frontend && npm i --force && npm run test"
			}
        }

		stage("deploy") {
		
			steps {
                sh "sudo cp -rf ${WORKSPACE}/reputationmanagement.web/build/* /home/ehmeeops/reputationmanagement.web/frontend"
                sh "sudo pm2 start"

	
            }
			
	    }

		stage("Performance test"){

			steps{
				echo 'Installing k6'
                sh 'sudo chmod +x setup_k6.sh'
                sh 'sudo ./setup_k6.sh'
                echo 'Running K6 performance tests...'
				sh 'ls -a'
				sh "pwd"
                sh 'k6 run Performance_Test_Reputef.js'
			}
		}
	}
}
