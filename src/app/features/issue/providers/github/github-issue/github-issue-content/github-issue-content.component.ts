import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TaskWithSubTasks} from '../../../../../tasks/task.model';
import {GithubApiService} from '../../github-api.service';
import {GithubIssue} from '../github-issue.model';
import {expandAnimation} from '../../../../../../ui/animations/expand.ani';
import {T} from '../../../../../../t.const';
import {TaskService} from '../../../../../tasks/task.service';

@Component({
  selector: 'github-issue-content',
  templateUrl: './github-issue-content.component.html',
  styleUrls: ['./github-issue-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandAnimation]
})
export class GithubIssueContentComponent {
  @Input() issue: GithubIssue;
  @Input() task: TaskWithSubTasks;

  T = T;

  constructor(
    private readonly  _githubApiService: GithubApiService,
    private readonly  _taskService: TaskService,
  ) {
  }


  hideUpdates() {
    this._taskService.markIssueUpdatesAsRead(this.task.id);
  }
}
