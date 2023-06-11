# Utiliza una imagen base de Node.js adecuada
FROM node:14-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY cliente/ ./

# Instala las dependencias del cliente
RUN npm install

# Construye el proyecto de Angular
RUN npm run build --prod

# Expone el puerto de la aplicación Angular (si es necesario)
# EXPOSE 4200

# Comando para ejecutar el servidor web de Angular
CMD ["npm", "start"]
