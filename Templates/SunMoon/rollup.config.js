import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

export default {
    input: 'assets/js/script.js', // Caminho do arquivo de entrada
    output: {
        file: 'dist/bundle.min.js', // Arquivo de saída minificado
        format: 'iife', // Formato de bundle (pode ser diferente dependendo do seu uso)
        name: 'SunMoon', // Nome da biblioteca (caso esteja exportando algo global)
    },
    plugins: [
        // Minificar JavaScript
        terser(),

        // Minificar CSS
        postcss({
            extract: 'bundle.min.css', // Extrair o CSS em um arquivo separado
            minimize: true, // Habilitar minificação
            plugins: [cssnano()] // Usa cssnano para minificar o CSS
        })
    ]
};
