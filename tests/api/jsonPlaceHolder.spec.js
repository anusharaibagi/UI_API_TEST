const {test,expect} = require('@playwright/test');

test('JSON PlaceHolder API Automation', async({request})=>{
    const createResponse = await request.post('https://jsonplaceholder.typicode.com/users',{
        data:{
            name:"Anusha Raibagi",
            username: "anusharaibagi"
        }
    });
    expect(createResponse.status()).toBe(201);
    const createData = await createResponse.json();
    console.log("Created Data: ",createData)
    const userId = createData.id
    console.log("User ID", userId);

    // JSONPlaceholder simulates creation but doesn’t actually store new records.
    //Used existing demo users

    const getResponse = await request.get(`https://jsonplaceholder.typicode.com/users/2`)
    expect(getResponse.status()).toBe(200);

    const updateResponse = await request.put(`https://jsonplaceholder.typicode.com/users/2`,
        {
            data: {
                name:"Update Anusha Raibagi",
                username: "anusharaibagi"
            }
        }
    );
    expect(updateResponse.status()).toBe(200)
    const updateResponseJson = await updateResponse.json()
    console.log("Updated Data: ",updateResponseJson);
    expect(updateResponseJson.name).toBe('Update Anusha Raibagi')
});