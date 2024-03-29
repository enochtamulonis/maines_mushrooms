// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import consumer from '../channels/consumer'

const application = Application.start()
const context = require.context("controllers", true, /_controller\.js$/)
application.load(definitionsFromContext(context))

// Import and register all TailwindCSS Components
import { Dropdown, Modal, Tabs, Popover, Toggle, Slideover, Alert } from "tailwindcss-stimulus-components"
application.register('dropdown', Dropdown)
application.register('modal', Modal)
application.register('tabs', Tabs)
application.register('popover', Popover)
application.register('toggle', Toggle)
application.register('slideover', Slideover)
application.register('alert', Alert)
