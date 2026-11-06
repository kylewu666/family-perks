-- Supabase SQL Editor 中执行。为家庭创建一个共用的邮箱密码账号。
create table if not exists public.benefit_usage (
 user_id uuid not null references auth.users(id) on delete cascade,
 benefit_key text not null,
 used boolean not null default false,
 primary key (user_id, benefit_key)
);
alter table public.benefit_usage enable row level security;
create policy "read own usage" on public.benefit_usage for select to authenticated using ((select auth.uid()) = user_id);
create policy "insert own usage" on public.benefit_usage for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "update own usage" on public.benefit_usage for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
grant select, insert, update on public.benefit_usage to authenticated;
