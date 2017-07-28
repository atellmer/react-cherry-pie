import * as pretty from 'prettyjson';

const log = (data, label = 'LOGGER: ') => console.log(`${label}: ${pretty.render(data)}`);

export default log;
