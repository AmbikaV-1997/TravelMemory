import React from 'react'
import Card from '../UIC/Card'
import FeatureCard from '../UIC/FeatureCard'

export default function Home() {
  return (
    <div style={{ margin: "2%"}}>
        <FeatureCard></FeatureCard>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
  )
}
