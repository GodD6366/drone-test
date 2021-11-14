const fs = require('fs');
const path = require('path');

const dockerComposePath = path.resolve(__dirname, '../docker-compose.yaml');
const [_, version] = process.argv.slice(2);

console.log(`当前构建版本：${version}`);

let dockerCompose = fs.readFileSync(dockerComposePath, {
  encoding: 'utf-8',
});

dockerCompose = dockerCompose.replaceAll('${DRONE_BUILD_NUMBER}', version);

fs.writeFileSync(dockerComposePath, dockerCompose, {
  encoding: 'utf-8',
});

console.log(`docker-compose.yaml 已更新！`);
