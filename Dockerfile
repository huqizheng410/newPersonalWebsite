# 使用一个基础镜像，例如 node:16-alpine
FROM node:16-alpine

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将项目文件复制到工作目录
COPY . .

# 复制环境变量文件
COPY .env.local .env.local

# Build the Next.js application
RUN npm run build

# 暴露端口 80
EXPOSE 80

# 启动命令，指定 Next.js 在 80 端口运行
CMD ["npm", "start", "--", "-p", "80"]
