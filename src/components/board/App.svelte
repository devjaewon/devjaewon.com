<Header />
<Main>
    <div class="board" slot="content">
        <div class="section-task-form">
            <TaskForm />
        </div>
        <div class="section-list">
            <ul class="tasks">
                {#each data.tasks as task}
                <li class="task">
                    <div class="checkbox">
                        <input id={`t${task.id}`} type="checkbox" value={task.complete}>
                        <label for={`t${task.id}`} class="view"></label>
                    </div>
                </li>
                {/each}
            </ul>
        </div>
    </div>
</Main>

<script lang="ts">
import Header from "@/components/common/Header.svelte";
import Main from "@/components/common/Main.svelte";
import TaskForm from "./TaskForm.svelte";
import type { PageLoadData } from "@/routes/board/+page.server";

export let data: PageLoadData;
</script>

<style lang="scss">
.section-task-form {
    margin-top: 40px;
}
</style>
