import { execa } from 'execa';
import { cli } from 'console-craft';
import { service } from './serve.js';
const commands = [
  { name: 'serve', args: [{ flags: '-p, --port <port>', default: 3000 }] },
  { name: 'test', args: ['-r, --round <round>'] },
];
cli.initialize(commands, {
  globalArgs: [{ flags: '-c, --config <config>', description: 'config file' }, '-log,  --log-level'],
  author: 'topabomb(hualei.hb@gmail.com)',
  description: 'node console app.',
  version: '[VI]{version} - {date}[/VI]', //from rollup-plugin-version-injector
});
cli.command('serve', async ({ name, args, logger }) => {
  const port = Number(args['port']);
  await service.start(port);
  logger.level = args['log-level'] ? args['log-level'] : 'debug';
  logger.info(`${name} listening : http://localhost:${args['port']}`);
});
cli.command('test', async ({ name, args, logger }) => {
  await service.start(3000);
  const round = args['round'] ? Number(args['round']) : 1;
  for (let i = 0; i < round; i++) await execa('mocha', []).pipeStdout(process.stdout);
  await service.close();
  logger.log('test complete.');
});
void cli.run();
