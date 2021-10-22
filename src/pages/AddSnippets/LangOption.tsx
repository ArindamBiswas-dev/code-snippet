const langs = [
  'Javascript',
  'Java',
  'C',
  'C++',
  'CSS',
  'HTML',
  'JSON',
  'CSharp',
  'Go',
  'GraphQl',
  'Markdown',
  'Typescript',
  'SQL',
  'Swift',
  'XML',
  'Shell',
  'Rust',
  'Ruby',
  'SCSS',
  'Python',
  'Php',
  'Perl',
  'Plaintext',
  'Objective-C',
]

type LangOptionsProps = {
  selectedlang: string
  setSelectedlang: React.Dispatch<React.SetStateAction<string>>
}

export const LangOption = ({
  selectedlang,
  setSelectedlang,
}: LangOptionsProps) => {
  return (
    <div>
      <select
        name="lang"
        id="lang"
        className="bg-gray-900"
        onChange={e => {
          console.log(selectedlang)
          setSelectedlang(e.target.value)
        }}
        defaultValue={selectedlang}
      >
        {langs.map(lang => {
          return (
            <option value={lang.toLowerCase()} key={lang}>
              {lang}
            </option>
          )
        })}
      </select>
    </div>
  )
}
