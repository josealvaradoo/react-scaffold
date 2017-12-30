import React from 'react'


const Scaffold = (props) => (
	<React.Fragment>
		<header className="header">
			<a className="button fixed" href="https://github.com/josealvaradoo/react-scaffold"><span className="fa fa-code-fork"></span> Fork on Github</a>
			<div className="header-container">
				<img src="https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg" className="webpack-logo" />
				<div className="title">React Scaffold</div>
				<div className="author"><a href="https://github.com/josealvaradoo">By Jose Alvarado</a></div>
			</div>
		</header>
		<main className="main">
			<div className="container">
				<article className="article">
					<h1 className="article-title">React Scaffold</h1>
					<date className="article-date">29 Diciembre 2017</date>
					<div className="article-author">
						<img src="https://avatars3.githubusercontent.com/u/6018790?s=460&v=4" alt="Jose Alvarado" className="article-author__img"/>
						<span className="article-author__name"><a href="http://twitter.com/josealvaradoo" target="_blank">Jose Alvarado</a></span>
					</div>
					<div className="article-content">
						<p>
							React Scaffold es una configuración de un ambiente para trabajar con ReactJS. La idea es configurar webpack para tener el completo control de las tareas de desarrollo al trabajar con la librería, lo que no ofrece el muy útil cli <code>create-react-app</code> que a pesar de ya traer todo configurado, no es de fácil edición.
						</p>
						<p>
							El Scaffold está preparado para resolver archivos CSS, Javascript, JSX, JSON e imágenes. Y compila el proyecto de dos maneras: Desarrollo y Producción.
						</p>
						<h4>Compilar para Desarrollo</h4>
						<p>
							En modo desarrollo levanta un servidor en <code>localhost:3000</code> tal como lo hace el CLI de React, con la posibilidad de modificarlo en el archivo <code>/webpack/webpack.server.config.js</code>. Además, no cuenta con plugins para reducir los tiempos de compilación.
						</p>
						<h4>Compilar para Producción</h4>
						<p>
							En modo producción la compilación tarda un poco más. Ésto porque aplica varios plugins para crear dos bundle. Uno CSS y otro Javascript. Además los minifica, y crea un <em>hash</em> a cada uno de ellos para evitar el <a href="https://ed.team/blog/como-ignorar-la-cache-del-navegador-cache-busting">caché busting</a>. Por último, tiene un plugin para conocer el progreso de la compilación.
						</p>
					</div>
					<div className="article-footer">
						<a href="https://github.com/josealvaradoo/react-scaffold" className="button button-cta">Fork on Github</a>
					</div>
				</article>
			</div>
		</main>
	</React.Fragment>
)

export default Scaffold