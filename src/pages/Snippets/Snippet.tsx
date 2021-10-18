import { SearchInput } from '../../components/SearchInput'
import { SnippetCard } from '../../components/SnippetCard'
import { Filter } from './Filter'

export const Snippet = () => {
  return (
    <>
      <SearchInput />
      <div className="mb-5 md:mb-10 mt-10 md:mt-10">
        <section className="flex justify-center gap-5 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-auto">
            <Filter />
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 
            xl:grid-cols-3 gap-4 md:pl-10 items-start"
          >
            <SnippetCard />
            <SnippetCard />
            <SnippetCard />
          </div>
        </section>
      </div>
    </>
  )
}
