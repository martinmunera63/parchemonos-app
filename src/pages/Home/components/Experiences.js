import React, { useEffect, useState } from 'react'
import { requestHttp } from '../../../services/HttpServer'
import { Adventure } from './Adventure'

export const Experiences = () => {

  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    loadExperiences()
  }, []) // se va a ejecutar 1 sola vez

  const loadExperiences = async () => {
    try {
      const response = await requestHttp('get', 'experiences')
      setExperiences(response.list)
    } catch (error) {
      console.error('Error', error)
    }
  }
  

  return (
    <section className="experiences-container">
      {
        experiences.map((item, index) => <Adventure key={index} {...item} />)
      }
    </section>
  )
}