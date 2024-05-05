import { getComponentSource } from '@/docs/lib/utils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const component = searchParams.get('component')

  if (component) {
    try {
      const source = getComponentSource(component)
      return new Response(source, {
        headers: {
          'Content-Type': 'text/plain',
        },
      })
    } catch (error) {
      return new Response('Component not found', { status: 404 })
    }
  } else {
    return new Response('Please provide a component name', { status: 400 })
  }
}
