FROM node:16-alpine 
WORKDIR /frontend
COPY package*.json ./
COPY . .
RUN npm ci 
RUN npm run build
# ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "run", "start"]
