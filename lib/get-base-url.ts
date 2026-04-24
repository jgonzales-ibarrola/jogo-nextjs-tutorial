import { isServer } from "@tanstack/react-query"

function getBaseURL() {
  if (!isServer) {
    return ''
  }
  
  return 'http://localhost:3000'
}