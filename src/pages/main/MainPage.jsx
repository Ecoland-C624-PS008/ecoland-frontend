import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../../components/ui/card'
const MainPage = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
   <Card>
    <img src="src\assets\ecolandnew.png" alt="" width={640} height={480} className='rounded'/>
    </Card>
    <Card>
    <img src="src\assets\ecolandnew.png" alt="" width={640} height={480} className='rounded'/>
    </Card>
    <Card>
    <img src="src\assets\ecolandnew.png" alt="" width={640} height={480} className='rounded'/>
    </Card>

    
        
    </div>
  )
}

export default MainPage