const BANNER_MAP: Record<string, string> = {
	'game-recolections': 'game-recolections',
	'charctersMorty': 'charcters-morty',
	'personal-landing': 'personal-landing',
	'prueba-front-donarApp': 'donacionapp',
	'Tienda-react-sql-node': 'tienda-react-sql-node',
	'grafos_neo4j': 'grafos-neo4j',
	'acortador-url-java': 'acortador-url-java',
	'acortador_url_python': 'acortador-url-python',
	'mvc-simple-con-flask': 'mvc-flask',
	'Puzzle-numeros-3x3': 'puzzle-3x3',
	'front-biblioteca': 'front-biblioteca',
	'biblioteca_back': 'back-biblioteca',
	'biblioteca-docs': 'biblioteca-docs',
	'tiendanjfront': 'minimarket-nj',
	'back_tiendanj': 'back-tiendanj',
	'biometric-service-py': 'biometric-service',
	'balanceapp': 'balanceapp',
	'notesDesk': 'notesdesk',
	'screenRecording': 'screen-recording',
	'clipForge': 'clipforge',
};

export function bannerFor(name: string): string | null {
	const key = BANNER_MAP[name];
	return key ? `assets/img/projects/${key}.svg` : null;
}