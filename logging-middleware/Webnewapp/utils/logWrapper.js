export async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMDIyY3NkLnIxMDFAc3ZjZS5lZHUuaW4iLCJleHAiOjE3NTM3Njc5MTcsImlhdCI6MTc1Mzc2NzAxNywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImMyMGNiNjc3LTI4YmMtNDlmNy1iZDdkLWEyMWJjNzMyZGU4OCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im9ta2FyYW0gaGVtYWxhdGhhIiwic3ViIjoiMjFkODNlNTctOWU2NS00OWI5LWI0ZDYtMGVmY2QxN2QyMDZmIn0sImVtYWlsIjoiMjAyMmNzZC5yMTAxQHN2Y2UuZWR1LmluIiwibmFtZSI6Im9ta2FyYW0gaGVtYWxhdGhhIiwicm9sbE5vIjoiMjJiZmEzMjEwMSIsImFjY2Vzc0NvZGUiOiJQcmp5UUYiLCJjbGllbnRJRCI6IjIxZDgzZTU3LTllNjUtNDliOS1iNGQ2LTBlZmNkMTdkMjA2ZiIsImNsaWVudFNlY3JldCI6InZCaFVuYlZBVnJCcnJlWEQifQ.Stmfg9grwHLQ2NxGiqpVJINDJPcFZHqeAeIFx1MZCIM",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      })
    });

    const data = await response.json();
    console.log("✅ Log Created:", data);
  } catch (error) {
    console.error("❌ Logging Error:", error);
  }
}
