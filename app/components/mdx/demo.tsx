import { cx } from 'cva'
import { Pre } from './pre'

interface Props {
  demo: React.ReactNode
  code?: string
  className?: string
  inline?: boolean
}

function Demo({ demo, code, className, inline = true }: Props) {
  return (
    <div
      className={cx(
        's-box',
        'my-8 flex overflow-hidden rounded-xl bg-[var(--color-bg-panel)] ring shadow-sm ring-neutral-solid/20',
        inline ? 'flex-col md:flex-row' : 'flex-col',
      )}
    >
      <div
        className={cx(
          'flex flex-1 flex-col items-start gap-4 overflow-auto p-4 text-sm text-neutral-text',
          className,
        )}
      >
        {demo}
      </div>

      {code && (
        <div
          className={cx(
            'flex flex-col overflow-auto border-neutral-3',
            inline ? 'flex-3 border-l' : 'border-t',
          )}
        >
          {code && (
            <Pre
              code={code}
              className="m-0! flex-1 rounded-none! border-none!"
            />
          )}
        </div>
      )}
    </div>
  )
}

export { Demo }
