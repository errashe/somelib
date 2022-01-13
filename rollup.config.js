import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const name = "main"

const bundle = config => ({
    ...config,
    input: 'src/main.ts',
    external: id => !/^[./]/.test(id),
})
export default [
    bundle({
        plugins: [esbuild()],
        output: [
            {
                file: `dist/${name}.js`,
                format: 'cjs',
                sourcemap: true,
            },
        ],
    }),
    bundle({
        plugins: [dts()],
        output: {
            file: `dist/${name}.d.ts`,
            format: 'es',
        },
    }),
]