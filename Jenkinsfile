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
                		sh "sudo cp -rf ${WORKSPACE}/reputationmanagement.web/frontend/build/* /home/ehmeeops/reputationmanagement.web/frontend"
               			// sh "sudo cd ~ && pm2 start ehmee.ecosystem.config.js"
				// sh "BUILD_ID=dontKillMe pm2 start ehmee.ecosystem.config.js"

	
            	}
			
	    }
	}
}
