export function HomePage() {
  return (
    <div className="space-y-4">
      <section className="rounded-2xl bg-linear-to-br from-primary to-blue-700 p-5 text-primary-foreground shadow-lg">
        <p className="text-sm font-medium text-blue-100">해커톤 웹앱</p>
        <h2 className="mt-1 text-2xl font-bold">앱 화면 UI 시작점</h2>
        <p className="mt-2 text-sm leading-relaxed text-blue-50">
          React + Vite + Tailwind CSS v4 기반으로 모바일 앱 형태의 웹 UI를
          확장할 수 있습니다.
        </p>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-4">
        <h3 className="text-sm font-semibold text-slate-800">다음 작업</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li className="flex items-start gap-2">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
            React Router 라우팅 (완료)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
            API 연동 및 상태 관리
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
            화면별 기능 구현
          </li>
        </ul>
      </section>
    </div>
  )
}
