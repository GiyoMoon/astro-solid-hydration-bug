import { children, Show, type FlowComponent, type VoidComponent } from 'solid-js'

const SolidComponent: VoidComponent = () => {
  return <ComponentWithResolvedChildren>
    <div>Children</div>
  </ComponentWithResolvedChildren>
}

const ComponentWithResolvedChildren: FlowComponent = (props) => {
  const resolvedChildren = children(() => props.children)

  return <Show when={false}>{resolvedChildren()}</Show>
}


export default SolidComponent
