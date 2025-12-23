const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  
  return (
    <>
      <div>page unique</div>
      {/* petit exercice : afficher dans la page le [id] dynamique */}
      <div>L ID dynamique est : <span>{id}</span></div>
    </>
  )
}

export default page