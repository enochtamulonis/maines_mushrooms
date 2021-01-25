// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import "@hotwired/turbo-rails"
import "channels"
import "stylesheets/application.scss"
import "../controllers/index.js"

require("trix")
require("@rails/actiontext")

// Active Storage and uploads
import * as ActiveStorage from "@rails/activestorage"
ActiveStorage.start()
const Uppy = require("@uppy/core")
const Dashboard = require("@uppy/dashboard")
const ActiveStorageUpload = require("@excid3/uppy-activestorage-upload")

require("@uppy/core/dist/style.css")
require("@uppy/dashboard/dist/style.css")

document.addEventListener("turbo:load", () => {
  document.querySelectorAll("[data-uppy]").forEach(element => setupUppy(element))
})

function setupUppy(element) {
  let trigger = element.querySelector('[data-behavior="uppy-trigger"]')
  let form = element.closest('form')
  let direct_upload_url = document.querySelector("meta[name='direct-upload-url']").getAttribute("content")
  let field_name = element.dataset.uppy

  trigger.addEventListener("click", (event) => event.preventDefault())

  let uppy = Uppy({
    autoProceed: true,
    allowMultipleUploads: true,
    logger: Uppy.debugLogger
  })

  uppy.use(ActiveStorageUpload, {
    directUploadUrl: direct_upload_url
  })

  uppy.use(Dashboard, {
    trigger: trigger,
    closeAfterFinish: false,
  })

  uppy.on("complete", (result) => {

    result.successful.forEach(file => {
      appendUploadedFile(element, file, field_name)
      setPreview(element, file)
    })

    uppy.reset()
  })
}

function appendUploadedFile(element, file, field_name) {
  const hiddenField = document.createElement('input')

  hiddenField.setAttribute('type', 'hidden')
  hiddenField.setAttribute('name', field_name)
  hiddenField.setAttribute('data-pending-upload', true)
  hiddenField.setAttribute('value', file.response.signed_id)

  element.appendChild(hiddenField)
}


function setPreview(element, file) {
  let preview = element.querySelector('[data-behavior="uppy-preview"]')
  if (preview) {
    let src = (file.preview) ? file.preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpj0DBTVsaja01_xWh37bcutvpd7rh7zEd528HD0d_l6A73osY"
    const previewImage = document.createElement('img')
    previewImage.src = src
    element.appendChild(previewImage)
  }
}

require("trix")
require("@rails/actiontext")
