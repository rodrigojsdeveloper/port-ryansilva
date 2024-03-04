<template>
    <div id="pixel-art-container">
        <div v-for="(row, rowIndex) in pixelMatrix" :key="rowIndex" class="pixel-row">
            <div v-for="(pixel, colIndex) in row" :key="colIndex" class="pixel"
                :style="{ color: pixel.color, fontSize: pixel.fontSize, opacity: pixel.opacity }">
                {{ pixel.character }}
            </div>
        </div>
    </div>
</template>
  
<script>
import euImage from '../../assets/eu.png';

export default {
    data() {
        return {
            pixelMatrix: [],
            characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/.,',
        };
    },
    mounted() {
        this.generatePixelArt();
    },
    methods: {
        async generatePixelArt() {
            let img = new Image();
            img.src = euImage;
            img.crossOrigin = 'Anonymous';

            img.onload = () => {
                console.log('Imagem carregada com sucesso:', img.width, img.height);

                let canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                let context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);
                let imageData = context.getImageData(0, 0, img.width, img.height).data;

                // Ajuste do tamanho da matriz para corresponder exatamente à imagem
                this.pixelMatrix = this.createPixelMatrix(imageData, img.width, img.height);

                this.animatePixels();
            };

            img.onerror = (error) => {
                console.error('Erro ao carregar a imagem:', error);
            };
        },

        createPixelMatrix(imageData, imageWidth, imageHeight) {
            let matrix = [];
            let pixelSize = 15; // Tamanho do pixel

            // Ajuste do tamanho da matriz para corresponder exatamente à imagem
            for (let y = 0; y < imageHeight - pixelSize; y += pixelSize) {
                let row = [];

                for (let x = 0; x < imageWidth; x += pixelSize) {
                    let pixel = this.getAverageColor(imageData, x, y, pixelSize, imageWidth);
                    let character = this.characters[Math.floor(Math.random() * this.characters.length)];
                    let fontSize = this.getFontSize(pixelSize);
                    row.push({ color: `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`, character, fontSize, opacity: 0 });
                }

                matrix.push(row);
            }

            return matrix;
        },
        getAverageColor(imageData, x, y, size, imageWidth) {
            let totalR = 0;
            let totalG = 0;
            let totalB = 0;

            for (let offsetY = 0; offsetY < size; offsetY++) {
                for (let offsetX = 0; offsetX < size; offsetX++) {
                    let pixelIndex = ((y + offsetY) * imageWidth + (x + offsetX)) * 4;
                    totalR += imageData[pixelIndex];
                    totalG += imageData[pixelIndex + 1];
                    totalB += imageData[pixelIndex + 2];
                }
            }

            let count = size * size;
            return {
                r: Math.round(totalR / count),
                g: Math.round(totalG / count),
                b: Math.round(totalB / count),
            };
        },
        getFontSize(pixelSize) {
            return `${Math.floor(pixelSize * 0.5)}px`;
        },
        animatePixels() {
            const totalRows = this.pixelMatrix.length;
            const totalCols = this.pixelMatrix[0].length;

            const pixelsPerFrame = 40;

            const animate = () => {
                for (let i = 0; i < pixelsPerFrame; i++) {
                    let rowIndex = Math.floor(Math.random() * totalRows);
                    let colIndex = Math.floor(Math.random() * totalCols);

                    // Adicione verificação para garantir que rowIndex e colIndex não ultrapassem os limites da matriz
                    rowIndex = Math.min(rowIndex, totalRows - 1);
                    colIndex = Math.min(colIndex, totalCols - 1);

                    if (this.pixelMatrix[rowIndex][colIndex].opacity !== 1) {
                        this.pixelMatrix[rowIndex][colIndex].opacity = 1;
                    }
                }

                if (!this.allPixelsVisible()) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        },

        allPixelsVisible() {
            return this.pixelMatrix.every(row => row.every(pixel => pixel.opacity === 1));
        },


    },
};
</script>
  
<style scoped>
#pixel-art-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pixel-row {
    display: flex;
}

.pixel {
    width: 5px;
    height: 5px;
    line-height: 15px;
    text-align: center;
    transition: opacity 0.1s ease;
    opacity: 0;
}
</style>
