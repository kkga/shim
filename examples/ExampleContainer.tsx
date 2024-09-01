function ExampleContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="s-box bg-background flex h-[600px] flex-col overflow-clip rounded-lg shadow-[var(--shadow-xs)]">
      {children}
    </div>
  )
}

export { ExampleContainer }
