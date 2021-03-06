import { chain, Rule, schematic } from '@angular-devkit/schematics'
import { ProjectType } from '@nrwl/workspace'
import { addFiles, normalizeOptions } from '../../utils'
import { WebCoreFeatureSchematicSchema } from './schema'

export default function (options: WebCoreFeatureSchematicSchema): Rule {
  const name = options.name || 'core'
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
