import { chain, Rule, schematic } from '@angular-devkit/schematics'
import { ProjectType } from '@nrwl/workspace'
import { addFiles, normalizeOptions } from '../../utils'
import { WebShellFeatureSchematicSchema } from './schema'

export default function (options: WebShellFeatureSchematicSchema): Rule {
  const name = options.name || 'shell'
  const directory = options.directory || options.name
  const normalizedOptions = normalizeOptions({ ...options, name: `${name}/feature` }, ProjectType.Library)
  return chain([
    schematic('web-lib', {
      directory,
      name,
      type: 'feature',
    }),
    addFiles(normalizedOptions),
  ])
}
