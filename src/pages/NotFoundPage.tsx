import { Link } from 'react-router-dom'
import { paths } from '@/router/paths'

export function NotFoundPage() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 text-center">
      <h2 className="text-lg font-semibold text-slate-900">페이지를 찾을 수 없어요</h2>
      <p className="mt-2 text-sm text-muted">
        요청한 주소가 없거나 이동되었을 수 있습니다.
      </p>
      <Link
        to={paths.home}
        className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}
