import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../Card'
import { Button } from '../Button'
import React from 'react'

const CardExample = () => {
  return (
    <div>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has a header with title and description, content area, and a footer with actions.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardExample