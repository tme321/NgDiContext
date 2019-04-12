# NgDiContext

This is a simple example of using the dependency injection system to provide a context from a parent to an eventual child component at an arbitrary depth without passing the context through each intervening component layer.

This example isn't meant to be feature complete, or usable.  It is merely a simple demonstration of one method through which this can be achieved.  The api, as much as it exists, is very rough around the edges and could be made much more developer friendly with more effort.

This is in no way production ready.  It is a learning tool and not a library intended for consumption.

Note that none of the feature components or the child components directly reference the ContextService.  They only ask the injector for whatever is registered as the contextToken for that part of the injector and expect it to be in the shape of the ContextModel.  This decoupling means that the context service itself could be rewritten or swapped out for another that conforms to the same public shape.

Also, while the feature components inject the ContextModel unconditionally they also provide it for themselves so it would be silly to mark a dependency as @Optional when the component itself is providing it.

The ChildOneComponent on the other hand is in the shared folder and not part of any of the feature modules.  Therefore it has the ContextModel injected as @Optional and then it performs a check to verify that it exists before the context is used.

The ChildTwoComponent, also located in the shared folder, is never injected with the service.  It is supposed to mirror using a component from a 3rd party library or unmodifiable in some other way.  Therefore, its direct parent is responsible for wiring it up to the context if necessary.

Overall this solution is a good first step if this functionality was desired, but there are many current pitfalls with this implementation: the observable streams are not managed which would lead to memory leaks in real applications, registering the same prop name repeatedly with the context service would cause unintended behavior, and in general there is no safety behind this implementation.  It is an interesting experiement in creating a generic handler for context to deeply nested components.  And it shows off the viability of the idea if developed further.  But it is not currently a full solution.
