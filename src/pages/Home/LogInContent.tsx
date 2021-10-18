import { SearchInput } from '../../components/SearchInput'
import { SnippetCard } from '../../components/SnippetCard'

export const LogInContent = () => {
  return (
    <>
      <SearchInput />
      <h2
        className="mb-5 md:mb-10 mt-10 md:mt-20
        text-sm md:text-lg font-medium text-gray-300 tracking-wider"
      >
        PINNED SNIPPETS
      </h2>
      <section
        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 
          gap-4"
      >
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
      </section>
    </>
  )
}
