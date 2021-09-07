import YAML from 'yaml'
import fs from 'fs'

var data = YAML.parse(fs.readFileSync('meta.yaml', 'utf-8'))
console.log(JSON.stringify(data))