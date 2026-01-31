import { test, expect } from '@playwright/test';

const userPayload = { name: 'Anusha', job: 'QA Automation Engineer' } 

test('ReqRes API automation', async ({ request }) => {
  // Create user
    const createResponse = await request.post('https://reqres.in/api/users', 
    { 
        data: userPayload
    });
    
    if(createResponse.status()===201)
    {
        const createData = await createResponse.json();
        const userId = createData.id;
        console.log("User ID:", userId)
    }
    else
    {
        expect(createResponse.status()).toBe(403);
    }
  

    // Get user
    const getResponse = await request.get(`https://reqres.in/api/users/1`);
    if(getResponse.status()===200)
    {
        const body = await getResponse.json();  
        console.log(body);
    }
    else
    {
        expect(getResponse.status()).toBe(403);
    }


    // Update user
    const updateResponse = await request.put(`https://reqres.in/api/users/1`, {
        data: { name: 'Anusha Raibagi', job: 'SDET' }
    });

    if(updateResponse.status()===200)
    {
        const updateData = await updateResponse.json();
        expect(updateData.name).toBe('Anusha Raibagi');
    }
    else
    {
        expect(updateResponse.status()).toBe(403);
    } 
    
});


