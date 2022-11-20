FROM node:16-alpine 
WORKDIR /frontend
COPY package*.json ./
COPY . .
RUN npm i 
RUN npm run build
# ENV NODE_ENV production
EXPOSE 3000
CMD ["npx", "serve", "build"]
