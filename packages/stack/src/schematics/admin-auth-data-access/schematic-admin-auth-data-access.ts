import { chain, Rule, schematic } from '@angular-devkit/schematics'
import { ProjectType } from '@nrwl/workspace'
import { addFiles, normalizeOptions } from '../../utils'
import { AdminAuthDataAccessSchematicSchema } from './schema'

export default function (options: AdminAuthDataAccessSchematicSchema): Rule {
  const type = 'data-access'
  const name = options.name || 'data-access'
  const directory = options.directory || options.name
  const normalizedOptions = normalizeOptions({ ...options, name: `${name}/${type}` }, ProjectType.Library)
  return chain([
    // Execute Schematic
    schematic('admin-lib', { directory, name, type }),
    // Add Files
    addFiles(normalizedOptions),
  ])
}